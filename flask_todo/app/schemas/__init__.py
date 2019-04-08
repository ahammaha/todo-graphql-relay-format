import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField
from .schema_task import TaskObject, CreateTask, UpdateTask, DeleteTask
from .schema_user import UserObject

'''
query{
  tasks{
    edges{
      node{
        uuid
        title
        description
        createdBy{
          uuid
          username
        }
      }
    }
  }
}
'''

class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()
    tasks = SQLAlchemyConnectionField(TaskObject)
    users = SQLAlchemyConnectionField(UserObject)

class Mutation(graphene.ObjectType):
    create_task = CreateTask.Field()
    update_task = UpdateTask.Field()
    delete_task = DeleteTask.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)






# class Query(graphene.ObjectType):
#     tasks = graphene.List(TaskType)
#     users = graphene.List(UserType)
#     user = graphene.Field(UserType, id=graphene.Int())
#
#     def resolve_users(self, info, **kwargs):
#         return db.session.query(User)
#
#     def resolve_tasks(self, info, **kwargs):
#         return db.session.query(Task)
#
#     def resolve_user(self, info, **kwargs):
#         id = kwargs.get("id")
#         return db.session.query(User).filter_by(id=id)
# schema = graphene.Schema(query=Query)