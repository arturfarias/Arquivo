from http import HTTPStatus

from fastapi import FastAPI, HTTPException

from fast_zero.schemas import Message, UserDB, UserList, UserPublic, UserSchema

from sqlalchemy import create_engine, select
from fast_zero.settings import Settings
from sqlalchemy.orm import Session

from fast_zero.models import User

app = FastAPI()


database = []


@app.get('/', status_code=HTTPStatus.OK, response_model=Message)
def read_root():
    return {'message': 'Olá Mundo!'}


@app.post('/users/', status_code=HTTPStatus.CREATED, response_model=UserPublic)
def create_user(user: UserSchema):

    engine = create_engine(Settings().DATABASE_URL)
    session = Session(engine)

    db_user = session.scalar(
        select(User).where(
            (User.username == user.username) | (User.email == user.email)
        )
    )


    


@app.get('/users/', status_code=HTTPStatus.OK, response_model=UserList)
def read_users():
    return {'users': database}


@app.put(
    '/users/{user_id}/', status_code=HTTPStatus.OK, response_model=UserPublic
)
def update_user(user_id: int, user: UserSchema):
    user_with_id = UserDB(id=user_id, **user.model_dump())
    if user_id < 1 or user_id > len(database):
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND,
            detail='Não foi encontrado o id indicado',
        )
    database[user_id - 1] = user_with_id

    return user_with_id


@app.delete(
    '/users/{user_id}/', status_code=HTTPStatus.OK, response_model=UserPublic
)
def delete_users(user_id: int):
    if user_id < 1 or user_id > len(database):
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND,
            detail='Não foi encontrado o id indicado',
        )
    return database.pop(user_id - 1)
