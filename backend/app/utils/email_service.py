import os
import logging
from dotenv import load_dotenv
from email.mime.text import MIMEText
from brevo import AsyncBrevo
from app.schemas.user import EmailRequest
from brevo.transactional_emails.client import SendTransacEmailRequestSender, SendTransacEmailRequestToItem

load_dotenv()
SMTP_KEY = os.getenv("SMTP_KEY")
EMAIL = os.getenv("EMAIL")
logger = logging.getLogger(__name__)

client = AsyncBrevo(
    api_key=SMTP_KEY
)

async def send_mail(data: EmailRequest):
    try:
        result = await client.transactional_emails.send_transac_email(
            text_content=f"""New Contact Form Submission Name: {data.first_name} {data.last_name} Email: {data.email} Message: {data.content}""",
            subject=data.subject,
            sender=SendTransacEmailRequestSender(email=EMAIL, name=data.first_name),
            to=[SendTransacEmailRequestToItem(email=EMAIL, name="Nickopusan")]
        )
        logger.info(f"Email sent successfully. Message ID: {result.message_id}")
        return result
    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        raise