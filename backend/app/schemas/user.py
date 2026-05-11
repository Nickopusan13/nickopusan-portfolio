from pydantic import EmailStr, Field
from datetime import datetime
from app.schemas.to_camel import BaseConfigModel
from typing import Optional

class ChatRequest(BaseConfigModel):
    prompt: str
    session_id: str | None = None

class ChatResponse(BaseConfigModel):
    reply: str
    session_id: str | None = None

class EmailRequest(BaseConfigModel):
    email: EmailStr = Field(min_length=1, max_length=100)
    first_name: str = Field(min_length=1, max_length=1000)
    last_name: str = Field(min_length=1, max_length=1000)
    subject: str = Field(min_length=1, max_length=100)
    content: str = Field(min_length=1, max_length=1000)