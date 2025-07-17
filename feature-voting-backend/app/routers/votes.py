from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import SessionLocal
from app.models import models
from app.schemas import schemas

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/votes/")
def vote_feature(vote: schemas.VoteCreate, db: Session = Depends(get_db)):
    db_vote = models.Vote(feature_id=vote.feature_id)
    db.add(db_vote)
    db.commit()
    db.refresh(db_vote)
    return db_vote
