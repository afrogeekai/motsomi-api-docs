from pydantic import BaseModel
from typing import List

class ActivityAnalysisResult(BaseModel):
    """Schema for activity analysis result."""
    timestamp: str
    activities: List[str]
    
class DetectObjectsResponse(BaseModel):
    """Schema for object detection response."""
    filename: str
    detections: List[str]