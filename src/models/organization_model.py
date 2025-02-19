from pydantic import BaseModel
from typing import List
from datetime import datetime
from typing import Optional


# Request model for organization registration
class OrganizationCreate(BaseModel):
    """Schema for creating an organization/company."""
    _id: Optional[str]
    created_by_id: str
    created_date: datetime
    last_updated_date: datetime
    organization_name: str
    # Is the organization still active(not deleted) on our system
    is_active: bool
    # Key that will be used to access this API
    api_key: str
    # User IDs of users under this organization
    allowed_api_users: List[str]
    
# Response model for organization registration
class OrganizationResponse(BaseModel):
    """Schema for an organization/company response"""
    _id: str
    created_by_id: str
    created_date: datetime
    last_updated_date: datetime
    organization_name: str
    # Is the organization still active(not deleted) on our system
    is_active: bool
    # Key that will be used to access this API
    api_key: str
    # User IDs of users under this organization
    allowed_api_users: List[str]