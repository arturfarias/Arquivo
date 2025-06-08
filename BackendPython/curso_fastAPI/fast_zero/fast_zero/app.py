from http import HTTPStatus

from fastapi import FastAPI, HTTPException, Depends

from fast_zero.schemas import Message, UserDB, UserList, UserPublic, UserSchema

from sqlalchemy import select
from fast_zero.database import getSession

from fast_zero.models import User

app = FastAPI()


database = []


@app.get('/', status_code=HTTPStatus.OK, response_model=Message)
def read_root():
    return {'message': 'Olá Mundo!'}


@app.post('/users/', status_code=HTTPStatus.CREATED, response_model=UserPublic)
def create_user(
    user: UserSchema,
    session = Depends(getSession)
):
    db_user = session.scalar(
        select(User).where(
            (User.username == user.username) | (User.email == user.email)
        )
    )

    if db_user:
        if db_user.username == user.username:
            raise HTTPException(
                status_code=HTTPStatus.CONFLICT,
                detail='Username Já Existe',
            )
        elif db_user.email == user.email:
            raise HTTPException(
                status_code=HTTPStatus.CONFLICT,
                detail='Email Já Existe',
            )
    
    db_user = User(
        username=user.username,
        email=user.email,
        password=user.password,
    )

    session.add(db_user)
    session.commit()
    session.refresh(db_user)

    return db_user

    


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
