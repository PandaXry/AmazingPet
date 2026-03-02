from fastapi import FastAPI, APIRouter, HTTPException, Header, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import html as _html
import time
from collections import defaultdict
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone
import asyncio
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')

# Admin API key
ADMIN_API_KEY = os.environ.get('ADMIN_API_KEY', '')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ============ Pydantic Models ============

class ContactFormSubmission(BaseModel):
    """Contact form submission from website"""
    name: str = Field(..., min_length=1, max_length=255)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=255)
    phone: Optional[str] = Field(None, max_length=50)
    message: str = Field(..., min_length=1, max_length=2000)
    lead_type: Literal["Breeder", "Groomer", "Distributor", "Clinic", "Other"] = "Other"
    interest: Literal["Book Demo", "General Inquiry", "Partnership", "Pricing"] = "General Inquiry"

class ContactFormResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str
    lead_type: str
    interest: str
    status: str
    created_at: str

class NewsletterSubscription(BaseModel):
    """Newsletter signup"""
    email: EmailStr
    source_page: Optional[str] = "home"

class NewsletterResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    email: str
    subscribed_at: str
    status: str

class BookingRequest(BaseModel):
    """Request for demo/coffee chat booking"""
    name: str = Field(..., min_length=1, max_length=255)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=255)
    phone: Optional[str] = Field(None, max_length=50)
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    meeting_type: Literal["Demo", "Coffee Chat", "Technical Consultation"] = "Demo"
    notes: Optional[str] = Field(None, max_length=1000)

class BookingResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    email: str
    company: Optional[str] = None
    meeting_type: str
    status: str
    created_at: str

class ResourceDownload(BaseModel):
    """Track resource downloads"""
    email: EmailStr
    resource_name: str = Field(..., min_length=1, max_length=255)
    resource_type: Literal["Brochure", "Spec Sheet", "Case Study", "Guide"] = "Brochure"

class CRMWebhookPayload(BaseModel):
    """CRM webhook payload"""
    event_type: str
    lead_id: str
    timestamp: str
    data: dict


# ============ Email Utilities ============

async def send_email_async(recipient: str, subject: str, html_content: str):
    """Send email using Resend (async wrapper)"""
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [recipient],
            "subject": subject,
            "html": html_content
        }
        
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent to {recipient}: {email.get('id')}")
        return email
    except Exception as e:
        logger.error(f"Failed to send email to {recipient}: {str(e)}")
        raise

def generate_contact_confirmation_email(name: str) -> str:
    """Generate HTML for contact confirmation email"""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Inter, -apple-system, sans-serif; margin: 0; padding: 0; background: #f8fafc; }}
            .container {{ max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; padding: 40px; }}
            .header {{ border-bottom: 2px solid #0f172a; padding-bottom: 20px; margin-bottom: 30px; }}
            h1 {{ color: #0f172a; margin: 0; font-size: 28px; font-family: 'Plus Jakarta Sans', sans-serif; }}
            .content {{ color: #64748b; line-height: 1.8; }}
            .footer {{ margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 14px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Amazing Pet</h1>
            </div>
            <div class="content">
                <p>Hi {name},</p>
                <p>Thank you for contacting Amazing Pet. We've received your inquiry and our team will get back to you within 24 hours.</p>
                <p>We're excited to discuss how our on-site microscopy imaging solutions can support your breeding management needs.</p>
                <p>Best regards,<br><strong>Amazing Pet Australia Team</strong></p>
            </div>
            <div class="footer">
                <p>This is an automated confirmation email. Please do not reply to this message.</p>
            </div>
        </div>
    </body>
    </html>
    """

def generate_internal_notification_email(form_data: dict) -> str:
    """Generate HTML for internal team notification"""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Inter, -apple-system, sans-serif; margin: 0; padding: 0; background: #f8fafc; }}
            .container {{ max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; padding: 40px; }}
            .header {{ background: #0f172a; color: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; }}
            h1 {{ margin: 0; font-size: 24px; }}
            .field {{ margin-bottom: 20px; }}
            .label {{ font-weight: 600; color: #0f172a; margin-bottom: 5px; }}
            .value {{ color: #64748b; }}
            .badge {{ display: inline-block; background: #0f172a; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🔔 New Lead: {form_data.get('lead_type', 'General')}</h1>
            </div>
            <div class="field">
                <div class="label">Interest Type</div>
                <div class="value"><span class="badge">{form_data.get('interest', 'General Inquiry')}</span></div>
            </div>
            <div class="field">
                <div class="label">Name</div>
                <div class="value">{form_data.get('name', 'N/A')}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">{form_data.get('email', 'N/A')}</div>
            </div>
            <div class="field">
                <div class="label">Company</div>
                <div class="value">{form_data.get('company', 'N/A')}</div>
            </div>
            <div class="field">
                <div class="label">Phone</div>
                <div class="value">{form_data.get('phone', 'N/A')}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="value">{form_data.get('message', 'N/A')}</div>
            </div>
        </div>
    </body>
    </html>
    """


# ============ Rate Limiting (in-memory sliding window) ============

_rl_store: dict = defaultdict(list)
_RL_MAX = 5       # requests
_RL_WINDOW = 60   # seconds


def _check_rate_limit(ip: str, endpoint: str) -> None:
    """Raise 429 if the IP has exceeded _RL_MAX requests in the last _RL_WINDOW seconds."""
    key = f"{ip}:{endpoint}"
    now = time.monotonic()
    cutoff = now - _RL_WINDOW
    _rl_store[key] = [t for t in _rl_store[key] if t > cutoff]
    if len(_rl_store[key]) >= _RL_MAX:
        raise HTTPException(
            status_code=429,
            headers={"Retry-After": str(_RL_WINDOW)},
            detail={"error": "too_many_requests", "retry_after": _RL_WINDOW},
        )
    _rl_store[key].append(now)


# ============ Admin Security ============

async def verify_admin_key(x_admin_key: Optional[str] = Header(None)):
    """Verify admin API key from x-admin-key header"""
    if not ADMIN_API_KEY:
        # If no admin key configured, deny access for security
        raise HTTPException(status_code=401, detail={"error": "unauthorized"})
    
    if not x_admin_key or x_admin_key != ADMIN_API_KEY:
        raise HTTPException(status_code=401, detail={"error": "unauthorized"})
    
    return True


# ============ API Endpoints ============

@api_router.get("/")
async def root():
    return {"message": "Amazing Pet API v1.0", "status": "operational"}

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form: ContactFormSubmission):
    """Handle contact form submission with lead routing"""
    try:
        # Create contact record
        contact_id = str(uuid.uuid4())
        contact_doc = {
            "id": contact_id,
            "name": form.name,
            "email": form.email,
            "company": form.company,
            "phone": form.phone,
            "message": form.message,
            "lead_type": form.lead_type,
            "interest": form.interest,
            "status": "new",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "synced_to_crm": False
        }
        
        await db.contacts.insert_one(contact_doc)
        
        # Send confirmation email to user (non-blocking)
        asyncio.create_task(
            send_email_async(
                form.email,
                "Thank you for contacting Amazing Pet",
                generate_contact_confirmation_email(form.name)
            )
        )
        
        # Send internal notification (non-blocking)
        # Replace with your internal email address
        internal_email = os.environ.get('INTERNAL_NOTIFICATION_EMAIL', SENDER_EMAIL)
        asyncio.create_task(
            send_email_async(
                internal_email,
                f"New Lead: {form.lead_type} - {form.interest}",
                generate_internal_notification_email(contact_doc)
            )
        )
        
        logger.info(f"Contact form submitted: {form.email} ({form.lead_type})")
        
        return ContactFormResponse(**contact_doc)
    
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.post("/newsletter", response_model=NewsletterResponse)
async def subscribe_newsletter(subscription: NewsletterSubscription):
    """Handle newsletter subscription"""
    try:
        # Check if already subscribed
        existing = await db.newsletter_subscribers.find_one(
            {"email": subscription.email},
            {"_id": 0}
        )
        
        if existing:
            return NewsletterResponse(**existing)
        
        subscriber_id = str(uuid.uuid4())
        subscriber_doc = {
            "id": subscriber_id,
            "email": subscription.email,
            "source_page": subscription.source_page,
            "subscribed_at": datetime.now(timezone.utc).isoformat(),
            "status": "active"
        }
        
        await db.newsletter_subscribers.insert_one(subscriber_doc)
        
        logger.info(f"Newsletter subscription: {subscription.email}")
        
        return NewsletterResponse(**subscriber_doc)
    
    except Exception as e:
        logger.error(f"Error subscribing to newsletter: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to subscribe")

@api_router.post("/booking", response_model=BookingResponse)
async def request_booking(booking: BookingRequest):
    """Handle demo/meeting booking request"""
    try:
        booking_id = str(uuid.uuid4())
        booking_doc = {
            "id": booking_id,
            "name": booking.name,
            "email": booking.email,
            "company": booking.company,
            "phone": booking.phone,
            "preferred_date": booking.preferred_date,
            "preferred_time": booking.preferred_time,
            "meeting_type": booking.meeting_type,
            "notes": booking.notes,
            "status": "pending",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "synced_to_crm": False
        }
        
        await db.bookings.insert_one(booking_doc)
        
        # Send confirmation email (non-blocking)
        asyncio.create_task(
            send_email_async(
                booking.email,
                f"Booking Request Received - {booking.meeting_type}",
                generate_contact_confirmation_email(booking.name)
            )
        )
        
        logger.info(f"Booking request: {booking.email} ({booking.meeting_type})")
        
        return BookingResponse(**booking_doc)
    
    except Exception as e:
        logger.error(f"Error creating booking: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create booking")

@api_router.post("/downloads")
async def track_download(download: ResourceDownload):
    """Track resource downloads"""
    try:
        download_id = str(uuid.uuid4())
        download_doc = {
            "id": download_id,
            "email": download.email,
            "resource_name": download.resource_name,
            "resource_type": download.resource_type,
            "downloaded_at": datetime.now(timezone.utc).isoformat()
        }
        
        await db.downloads.insert_one(download_doc)
        
        logger.info(f"Resource download: {download.resource_name} by {download.email}")
        
        return {"status": "success", "message": "Download tracked"}
    
    except Exception as e:
        logger.error(f"Error tracking download: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to track download")

@api_router.post("/webhooks/crm")
async def handle_crm_webhook(payload: CRMWebhookPayload):
    """Handle incoming CRM webhooks (HubSpot-compatible)"""
    try:
        webhook_id = str(uuid.uuid4())
        webhook_doc = {
            "id": webhook_id,
            "event_type": payload.event_type,
            "lead_id": payload.lead_id,
            "timestamp": payload.timestamp,
            "data": payload.data,
            "received_at": datetime.now(timezone.utc).isoformat()
        }
        
        await db.crm_webhooks.insert_one(webhook_doc)
        
        logger.info(f"CRM webhook received: {payload.event_type}")
        
        return {"status": "received", "webhook_id": webhook_id}
    
    except Exception as e:
        logger.error(f"Error handling CRM webhook: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process webhook")

@api_router.get("/contacts", response_model=List[ContactFormResponse])
async def get_contacts(
    limit: int = 50,
    x_admin_key: Optional[str] = Header(None)
):
    """Retrieve contact submissions (admin endpoint - requires x-admin-key header)"""
    # Verify admin authentication
    await verify_admin_key(x_admin_key)
    
    try:
        contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
        return [ContactFormResponse(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error retrieving contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve contacts")

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


# Include the router in the main app
app.include_router(api_router)

# ============ CORS Configuration ============

def configure_cors():
    """Configure CORS with production-safe defaults"""
    cors_origins_str = os.environ.get('CORS_ORIGINS', '').strip()
    environment = os.environ.get('ENVIRONMENT', 'production').lower()
    
    # Default to localhost if not specified
    if not cors_origins_str:
        logger.warning("CORS_ORIGINS not set, defaulting to http://localhost:3000")
        cors_origins_str = "http://localhost:3000"
    
    # Parse comma-separated origins
    origins = [origin.strip() for origin in cors_origins_str.split(',') if origin.strip()]
    
    # Security: Refuse to start if wildcard in production
    if '*' in origins:
        if environment == 'production':
            logger.error("FATAL: CORS wildcard (*) is not allowed in production mode")
            logger.error("Set CORS_ORIGINS to specific domain(s) in environment variables")
            raise ValueError("CORS wildcard (*) not allowed in production. Set CORS_ORIGINS to specific origins.")
        else:
            logger.warning("⚠️  WARNING: CORS wildcard (*) detected in non-production environment")
            logger.warning("⚠️  This allows ANY origin to access your API - use only for development")
    
    logger.info(f"CORS enabled for origins: {origins}")
    return origins

# Configure and apply CORS middleware
configured_origins = configure_cors()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=configured_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "x-admin-key"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
