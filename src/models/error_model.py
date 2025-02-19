from pydantic import BaseModel

class HttpError(BaseModel):
    """Schema for HTTP errors."""
    message: str
    details: str # Optional field for extra information