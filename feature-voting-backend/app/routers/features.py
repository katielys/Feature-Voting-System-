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

@router.post("/features/")
def create_feature(feature: schemas.FeatureCreate, db: Session = Depends(get_db)):
    db_feature = models.Feature(title=feature.title, description=feature.description)
    db.add(db_feature)
    db.commit()
    db.refresh(db_feature)
    return db_feature

@router.get("/features/")
def read_features(db: Session = Depends(get_db)):
    return db.query(models.Feature).all()
