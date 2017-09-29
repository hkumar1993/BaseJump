import React from 'react'
import TodoListIndexItem from './todolist_index_item'
import TodoListForm from './todolist_form'
import { Link } from 'react-router-dom'
import Loading from '../loader'

class TodoListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: false}
    this.toggleHide = this.toggleHide.bind(this)
  }

  componentDidMount(){
    console.log('Coponent Mounted!');
    this.setState({loading: true})
    this.props.fetchProject(this.props.projectId).
      then(res => this.props.fetchProjectTodoLists(this.props.projectId)).
      then(res => this.props.fetchProjectTodos(this.props.projectId))
  }

  componentWillReceiveProps(newProps){
    console.log('Component Remounted!');
    if(newProps.match.params.projectId !== this.props.match.params.projectId){
      this.props.fetchProject(this.props.projectId).
        then(this.props.fetchProjectTodoLists(this.props.projectId)).
        then(this.props.fetchProjectTodos(this.props.projectId))
    }
    setTimeout(() => this.setState({loading: false}), 750)
  }

  toggleHide(){
    $(`#add-todolist-${this.props.project.id}`).addClass('hidden')
    $(`#new-todolist-${this.props.project.id}`).removeClass('hidden')
  }


  render(){
    const todoLists = this.props.todoLists


    if(this.state.loading || !Boolean(this.props.project)){
      return (
        <Loading />
      )
    } else {
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}`}>
              <span>{this.props.project.name}</span>
            </Link>

           > To-dos</header>
          <div className='main-tool'>
            <h1>To-dos <span id='completion'></span></h1>
            <a className='btn btn-submit'
              id={`add-todolist-${this.props.project.id}`}
              onClick={this.toggleHide}>Make another list</a>
            <TodoListForm project={this.props.project}
              currentUser={this.props.currentUser}
              createTodoList={this.props.createTodoList} />
            <ul className='todolists'>
              { todoLists ? todoLists.map(todoList => (<TodoListIndexItem key={todoList.id}
                  todoList={todoList} todos={this.props.todos}
                  params={ this.props.params }
                  toggleTodo={ this.props.toggleTodo}
                  createTodo={ this.props.createTodo }
                  fetchTodoListTodos={this.props.fetchTodoListTodos}
                  currentUser={ this.props.currentUser } />)) : <li></li>}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default TodoListIndex
