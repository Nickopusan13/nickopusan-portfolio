from sqlalchemy import Column, String, Integer, DateTime, func, Text, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship
from app.db.base import Base
from datetime import datetime

class ChatSession(Base):
    __tablename__ = "chat_session"
    session_id: Mapped[str] = mapped_column(String(1000), primary_key=True, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    messages: Mapped[list["ChatMessage"]] = relationship(
        "ChatMessage",
        back_populates="chat_session",
        cascade="all, delete-orphan",
        lazy="selectin"
    )
    
class ChatMessage(Base):
    __tablename__ = "chat_message"
    id: Mapped[int] = mapped_column(primary_key=True)
    session_id: Mapped[str] = mapped_column(String(1000), ForeignKey("chat_session.session_id") ,index=True, nullable=False)
    role: Mapped[str] = mapped_column(String(50), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    chat_session: Mapped["ChatSession"] = relationship(
        "ChatSession", back_populates="messages", lazy="selectin"
    )