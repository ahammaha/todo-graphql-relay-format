from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models import User
import graphene

class UserObject(SQLAlchemyObjectType):
   class Meta:
       model = User
       interfaces = (graphene.relay.Node, )
