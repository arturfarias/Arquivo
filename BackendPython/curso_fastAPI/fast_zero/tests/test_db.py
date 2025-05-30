from fast_zero.models import User


def test_create_user(session):
    user = User(
        username='test',
        email='teste@test.com',
        password='test',
    )

    session.add(user)
    session.commit()

    assert user.username == 'test'
