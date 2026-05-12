from app.db.session import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func, delete
from sqlalchemy.orm import selectinload
from typing import Optional
from app.db.models.user import ChatSession, ChatMessage


async def get_user(db: AsyncSession, user_id: Optional[int] = None) -> Optional[ChatSession]:
    query = select(ChatSession).options(selectinload(ChatSession.messages))
    if user_id is not None:
        query = query.where(ChatSession.id == user_id)
    else:
        return None
    result = await db.execute(query)
    return result.scalars().first()