from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models import Task, User
import graphene
from app import db

class TaskObject(SQLAlchemyObjectType):
    class Meta:
        model = Task
        interfaces = (graphene.relay.Node, )

class CreateTask(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        createdBy = graphene.String(required=True)
    task = graphene.Field(lambda: TaskObject)
    def mutate(self, info, title, description, createdBy):
        user = User.query.filter_by(username=createdBy).first()
        task = Task(title=title, description=description, status="incomplete")
        if user is not None:
            task.created_by = user.uuid
        db.session.add(task)
        db.session.commit()
        return CreateTask(task=task)


class UpdateTask(graphene.Mutation):
    task = graphene.Field(TaskObject)
    class Arguments:
        uuid = graphene.Int()
        title = graphene.String()
        description = graphene.String()
        status = graphene.String()
    def mutate(self, info, uuid, status=None, title=None, description=None):
        task = Task.query.filter_by(uuid=uuid).first()
        if task:
            if status:
                task.status=status
            if title:
                task.title=title
            if description:
                task.description=description
            db.session.commit()

class DeleteTask(graphene.Mutation):
    task = graphene.Field(TaskObject)
    class Arguments:
        uuid = graphene.Int()

    def mutate(self, info, uuid):
        Task.query.filter_by(uuid=uuid).delete()
        db.session.commit()

