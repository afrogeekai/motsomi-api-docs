from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
from enum import Enum


class Role(str, Enum):
    """Enum for user roles used by the system."""
    admin = "admin"
    user = "user"
    guest = "guest"
    

class UserCreate(BaseModel):
    """Schema for creating a new user."""
    email: EmailStr
    password: str
    organization_name: str


class User(BaseModel):
    """Schema for a user."""
    _id: Optional[str]
    email: EmailStr
    created_date: datetime
    last_updated_date: datetime
    # Is the user still active(not deleted) on our system
    is_active: bool
    hashed_password: str
    organization_name: str
    role: Role
    

class UserCreateResponse(BaseModel):
    """Schema for creating a new user(organization) response."""
    api_key: str


class AuthRequest(BaseModel):
    """Schema for authentication/login."""
    email: EmailStr
    password: str


class AuthResponse(BaseModel):
    """Schema for authentication/login response."""
    access_token: str 
    token_type: str