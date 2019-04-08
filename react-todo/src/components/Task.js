import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTask($uuid: Int!){
    deleteTask(uuid:$uuid) {
      task{
        uuid
        title
        description
        status
        createdBy{
          id
          username
        }
      }
    }
  }
`
const UPDATE_TASK_STATUS_MUTATION = gql`
mutation UpdateTask($uuid: Int!, $status: String!){
  updateTask(uuid:$uuid, status:$status){
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


class Task extends React.Component{
  render(){
    let incomplete="incomplete";
    let complete="complete";
    console.log(this.props.task)
    const uuid=parseInt(this.props.task.uuid)
    return(
      <tr>
        <td>
          {this.props.task.status=="incomplete"?
            <Mutation mutation={UPDATE_TASK_STATUS_MUTATION} variables={{ uuid, status:complete }}>
              {updateTask=> <button onClick={updateTask}>Incompleted</button>}
            </Mutation> :
            <Mutation mutation={UPDATE_TASK_STATUS_MUTATION} variables={{ uuid, status:incomplete }}>
              {updateTask => <button onClick={updateTask}>Completed</button>}
            </Mutation>
          }
        </td>
        <td>{ this.props.task.title }</td>
        <td>{ this.props.task.createdBy.username }</td>
        <td>
          <Mutation mutation={DELETE_TASK_MUTATION} variables={{ uuid }}>
            {deleteTask => <button className="deleteTask" onClick={deleteTask}>Delete</button>}
          </Mutation>
        </td>
      </tr>
    )
  }
}

export default Task
