import React from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import ListTasks from './ListTasks'

const CREATE_TASK_MUTATION = gql`
mutation CreateTask($title: String!, $description: String!, $createdBy: String!){
  createTask(title: $title, description: $description, createdBy: $createdBy) {
    task{
      uuid
      description
      title
      status
      createdBy{
        uuid
        username
      }
    }
  }
}
`


class Tasks extends React.Component{
  state = {
    uuid: '',
    title: '',
    description: '',
    createdBy: 'maha',
    data:""
  }

  render(){
    const {title, description, createdBy} = this.state

    return(
      <div className="TodoContainer">
          <div>
            <input
              className="mb2"
              value={title}
              onChange={e => this.setState({ title: e.target.value })}
              type="text"
              placeholder="Task name"
            />
            <input
              className="mb2"
              value={description}
              onChange={e => this.setState({ description: e.target.value })}
              type="text"
              placeholder="Task description"
            />
            <Mutation mutation={CREATE_TASK_MUTATION}
                      variables={{ title, description, createdBy }}>
              {(insertTask, {data}) => (
                <button onClick={insertTask}>Submit</button>
              )}
            </Mutation>
            <ListTasks />
          </div>
      </div>
    )
  }
}

export default Tasks;
