from fastapi import FastAPI
from app.routers import features, votes
from app.database.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(features.router)
app.include_router(votes.router)
