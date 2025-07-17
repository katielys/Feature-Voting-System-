from pydantic import BaseModel

class FeatureCreate(BaseModel):
    title: str
    description: str

class VoteCreate(BaseModel):
    feature_id: int
