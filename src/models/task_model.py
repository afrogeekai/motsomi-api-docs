from pydantic import BaseModel
from typing import Any, Optional
from enum import Enum

# Define available process statuses as enum
class ProcessStatus(str, Enum):
    """Enum for system process statuses"""
    in_progress = "in progress"
    failed = "failed"
    completed = "completed"
    not_found = "not found"

class TaskResponse(BaseModel):
    """Schema for a task response."""
    _id: Optional[str]
    task_id: str
    message: str
    status: str
    results: Any
    
class TaskCreate(BaseModel):
    """Schema for creating a task."""
    _id: str
    task_id: str
    message: str
    status: str
    results: Any