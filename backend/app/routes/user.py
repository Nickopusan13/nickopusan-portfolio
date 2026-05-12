from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.responses import JSONResponse
from app.schemas.user import ChatResponse, ChatRequest, EmailRequest
from app.utils.email_service import send_mail
from app.db.models.user import ChatSession, ChatMessage
from app.db.session import AsyncSession
from app.db.dependencies import get_db
from google import genai
from google.genai import types
from dotenv import load_dotenv
from sqlalchemy import select
import os
import uuid

load_dotenv()
router = APIRouter()
sessions = {}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
instruction_path = os.path.join(BASE_DIR, "../config/instruction.txt")
with open(instruction_path, "r", encoding="utf-8") as f:
    SYSTEM_INSTRUCTION = f.read()


@router.post("/api/send-email", status_code=status.HTTP_200_OK)
async def user_send_email(data: EmailRequest):
    try:
        await send_mail(data=data)
        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={"message":"Email sent successfully"}
        )
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error, please try again later."
        )

@router.post("/api/chat", response_model=ChatResponse, status_code=status.HTTP_200_OK)
async def gemini_chat(data: ChatRequest, db: AsyncSession = Depends(get_db)):
    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
    session_id = data.session_id or str(uuid.uuid4())
    result = await db.execute(select(ChatSession).where(ChatSession.session_id == session_id))
    session = result.scalar_one_or_none()
    if not session:
        session = ChatSession(session_id=session_id)
        db.add(session)
        await db.commit()
    user_msg = ChatMessage(session_id=session_id, role="user", content=data.prompt)
    db.add(user_msg)
    await db.commit()
    result = await db.execute(
        select(ChatMessage).where(ChatMessage.session_id == session_id).order_by(ChatMessage.created_at.asc()).limit(10)
    )
    messages = result.scalars().all()
    context_messages = messages[-10:] if len(messages) > 10 else messages
    context = [m.content for m in context_messages]
    try:
        response = client.models.generate_content(
            model="gemini-3.1-flash-lite",
            contents=context,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=1500),
                system_instruction=SYSTEM_INSTRUCTION,
            ),
        )
        reply_text = response.text if hasattr(response, "text") else str(response)
        assistant_msg = ChatMessage(
            session_id= session_id,
            role="assistant",
            content=reply_text
        )
        db.add(assistant_msg)
        await db.commit()
        return {"reply": reply_text, "session_id": session_id}
    except Exception as e:
        await db.rollback()
        print(f"Gemini API Error: {type(e).__name__}: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error, Please try again later",
        )
