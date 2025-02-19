from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class VideoShotChangeResponse(BaseModel):
    """Schema for video shot change response."""
    filename: str
    shots: List
    
class URLInput(BaseModel):
    """Schema for URL input from the client."""
    url: str # File url
    token: Optional[str] # Token used to download protected files
    
class FileCreate(BaseModel):
    """Schema for file creation."""
    _id: Optional[str]
    created_date: datetime
    last_updated_date: datetime
    # Is the file still active(not deleted) on our system
    is_active: bool
    filename: str
    total_frames: Optional[int]
    path: str
    size: int
    extension: str
    
class FileResponse(BaseModel):
    """Schema for file response."""
    _id: Optional[str]
    created_date: datetime
    last_updated_date: datetime
    # Is the file still active(not deleted) on our system
    is_active: bool
    filename: str
    total_frames: int
    path: str
    size: int
    extension: str