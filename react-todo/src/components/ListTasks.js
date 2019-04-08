import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Task from './Task'

const Tasks_Query =  gql`
  {
    tasks {
      edges{
        node{
          uuid
          title
          description
          status
          createdBy{
            uuid
            username
          }
        }
      }
    }
  }
`;


class ListTasks extends React.Component{
  state = {
    uuid: '',
    title: '',
    description: '',
    createdBy: ''
  }

  render(){
    const {uuid, title, description, createdBy} = this.state

    return(
      <div className="TodoContainer">
          <Query query={Tasks_Query}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              const tasks = data.tasks.edges
              return (
                tasks?
                <table>
                  {tasks.map(
                      task => <Task key={task.uuid} task={task.node} />
                    )
                  }
                </table>:"No records"
              )
            }}
          </Query>
      </div>
    )
  }
}

export default ListTasks;
