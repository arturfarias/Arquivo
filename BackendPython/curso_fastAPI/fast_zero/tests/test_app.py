from http import HTTPStatus

from fast_zero.schemas import UserPublic


def test_root_deve_retornar_ok_e_ola_mundo(client):
    response = client.get('/')

    assert response.status_code == HTTPStatus.OK

    assert response.json() == {'message': 'Olá Mundo!'}


def test_create_user(client):
    response = client.post(
        '/users/',
        json={
            'username': 'testUserName',
            'password': 'password',
            'email': 'test@teste.com',
        },
    )

    assert response.status_code == HTTPStatus.CREATED
    assert response.json() == {
        'id': 1,
        'username': 'testUserName',
        'email': 'test@teste.com',
    }


def test_create_username_conflict(client):
    client.post(
        '/users/',
        json={
            'username': 'testUserName',
            'password': 'password',
            'email': 'test@teste.com',
        },
    )

    response = client.post(
        '/users/',
        json={
            'username': 'testUserName',
            'password': 'password',
            'email': 'test2@teste.com',
        },
    )

    assert response.status_code == HTTPStatus.CONFLICT
    assert response.json() == {'detail': 'Username Já Existe'}


def test_create_email_conflict(client):
    client.post(
        '/users/',
        json={
            'username': 'testUserName',
            'password': 'password',
            'email': 'test@teste.com',
        },
    )

    response = client.post(
        '/users/',
        json={
            'username': 'test2UserName',
            'password': 'password',
            'email': 'test@teste.com',
        },
    )

    assert response.status_code == HTTPStatus.CONFLICT
    assert response.json() == {'detail': 'Email Já Existe'}


def test_read_users(client):
    response = client.get('/users/')

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'users': []}


def test_read_users_with_user(client, user):
    user_schema = UserPublic.model_validate(user).model_dump()
    response = client.get('/users/')

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'users': [user_schema]}


def test_update_user(client, user):
    response = client.put(
        '/users/1',
        json={
            'username': 'updatedUserName',
            'email': 'updated@teste.com',
            'password': 'updated',
        },
    )

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        'id': 1,
        'username': 'updatedUserName',
        'email': 'updated@teste.com',
    }


def test_update_user_NOT_FOUND(client, user):
    response = client.put(
        '/users/9999',
        json={
            'username': 'updatedUserName',
            'email': 'updated@teste.com',
            'password': 'updated',
        },
    )

    assert response.status_code == HTTPStatus.NOT_FOUND


def test_delete_user(client, user):
    response = client.delete('/users/1')

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'message': 'Usuario deletado'}


def test_delete_user_NOT_FOUND(client):
    response = client.delete('/users/9999')

    assert response.status_code == HTTPStatus.NOT_FOUND


def test_update_integrity_error(client, user):
    client.post(
        '/users',
        json={
            'username': 'testUserName2',
            'email': 'test2@teste.com',
            'password': 'teste@123',
        },
    )

    response = client.put(
        f'/users/{user.id}',
        json={
            'username': 'testUserName2',
            'email': 'test3@teste.com',
            'password': 'teste@123',
        },
    )

    assert response.status_code == HTTPStatus.CONFLICT
    assert response.json() == {'detail': 'Username ou Email Já Existe'}
