from typing import Generic, TypeVar
from pydantic import BaseModel

T = TypeVar("T")  # Generic type placeholder

# Response model for all our API responses
class ResponseWrapper(BaseModel, Generic[T]):
    """
    Schema for all our API responses.
    
    Takes in `T type` which will be the `data` type returned by this wrapper
    """
    data: T
    status: int
    message: str
    page: int
    totalPages: int
    totalRecords: int
    currentPage: int
    success: bool