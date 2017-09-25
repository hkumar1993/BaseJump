import React from 'react'
import TodoListIndexItem from './todolist_index_item'

class TodoListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: false}
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchProject(this.props.projectId).
      then(this.props.fetchProjectTodoLists(this.props.projectId)).
      then(this.props.fetchProjectTodos(this.props.projectId))
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.projectId !== this.props.match.params.projectId){
      this.props.fetchProject(this.props.projectId).
        then(this.props.fetchProjectTodoLists(this.props.projectId)).
        then(this.props.fetchProjectTodos(this.props.projectId))
    }
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render(){
    const todoLists = this.props.todoLists
    console.log("Project:", this.props.project);
    console.log("Loading:", this.state.loading);
    if(this.state.loading || !Boolean(this.props.project)){
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className='tool-page'>
          <header><span>{this.props.project.name}</span> > To-dos</header>
          <div className='main-tool'>
            <h1>To-dos <span id='completion'></span></h1>
            <a className='btn btn-submit'>Make another list</a>
            <ul className='todolists'>
              { todoLists ? todoLists.map(todoList => (<TodoListIndexItem key={todoList.id}
                  todoList={todoList} todos={this.props.todos}
                  params={ this.props.params }
                  toggleTodo={ this.props.toggleTodo}
                  createTodo={ this.props.createTodo }
                  currentUser={ this.props.currentUser } />)) : <li></li>}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default TodoListIndex
