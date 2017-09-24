import React from 'react'
import TodoListIndexItem from './todolist_index_item'

class TodoListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: false}
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchProjectTodoLists(this.props.projectId).
      then(this.props.fetchProjectTodos(this.props.projectId))
  }

  componentWillReceiveProps(){
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render(){
    console.log(this.props);
    if(this.state.loading){
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <ul>
            { this.props.todoLists.map(todoList => (<TodoListIndexItem key={todoList.id} todoList={todoList} todos={this.props.todos} />))}
          </ul>
        </div>
      )
    }
  }
}

export default TodoListIndex
