import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or 'maha'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or "postgresql://{}:{}@localhost:5432/{}".format("postgresUsr", "postgresPwd", "todo_db")
    SQLALCHEMY_TRACK_MODIFICATIONS = True