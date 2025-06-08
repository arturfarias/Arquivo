from sqlalchemy import create_engine
from fast_zero.settings import Settings
from sqlalchemy.orm import Session


engine = create_engine(Settings().DATABASE_URL)

def getSession():
    with Session(engine) as session:
        yield session