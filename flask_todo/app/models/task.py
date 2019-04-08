from app import db

class Task(db.Model):
    __tablename__ = 'tasks'
    uuid = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    status = db.Column(db.Text)
    created_by = db.Column(db.Integer, db.ForeignKey('user.uuid'))

    def __repr__(self):
        return '<Task %r>' % self.title