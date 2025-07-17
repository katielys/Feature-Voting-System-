from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_feature():
    response = client.post("/features/", json={"title": "Test Feature", "description": "Test Description"})
    assert response.status_code == 200
    assert response.json()["title"] == "Test Feature"

def test_vote_feature():
    client.post("/features/", json={"title": "Vote Feature", "description": "Vote Description"})
    response = client.post("/votes/", json={"feature_id": 1})
    assert response.status_code == 200
    assert response.json()["feature_id"] == 1
