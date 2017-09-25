import React from 'react'
import TodoItem from './todo_item'
import { Link } from 'react-router-dom'
import TodoForm from './todo_form'

class TodoListIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: {},
      doneTodos: {},
      pendingTodos: {}
    }
    this.toggleHide = this.toggleHide.bind(this)
    this.filterTodos = this.filterTodos.bind(this)
  }

  toggleHide(){
    $(`#add-todo-${this.props.todoList.id}`).addClass('hidden')
    $(`#new-todo-${this.props.todoList.id}`).removeClass('hidden')
  }

  componentDidMount(){
    const todoList = this.props.todoList
    const todos = {}
    todoList.todoIds.forEach( id => todos[id] = this.props.todos[id])
    this.setState({todos})
    this.filterTodos(this.props)
  }

  filterTodos(props){
    const todoList = props.todoList
    const todos = {}
    todoList.todoIds.forEach( id => todos[id] = props.todos[id])
    this.setState({todos})
    let doneTodos = {};
    let pendingTodos = {};

    Object.keys(todos).forEach(id => {
      if(todos[id].done){
        doneTodos = Object.assign({}, doneTodos, { [id]: todos[id] })
      } else {
        pendingTodos = Object.assign({}, pendingTodos, { [id]: todos[id] })
      }
    })
    this.setState({ doneTodos, pendingTodos })
  }

  componentWillReceiveProps(newProps){
    this.filterTodos(newProps)
  }

  render(){
    const todoList = this.props.todoList
    const todos = this.state.todos
    const params = this.props.params
    const toggleTodo = this.props.toggleTodo
    const doneTodos = this.state.doneTodos;
    const pendingTodos = this.state.pendingTodos;



    return (
      <li className='todolist-item'>
          <h1><Link to={`/${params.userId}/projects/${params.projectId}/todolists/${todoList.id}`}>{todoList.title}</Link></h1>
          <ul className='todos pending'>
            { Object.keys(pendingTodos).map(id => <TodoItem key={id}
              todo={todos[id]} toggleTodo={toggleTodo}/>)}
          </ul>
          <a id={`add-todo-${todoList.id}`} className='btn btn-normal'
            onClick={this.toggleHide}>Add a to-do</a>
          <TodoForm createTodo={this.props.createTodo}
            todoList={todoList} currentUser={this.props.currentUser} />
          <ul className='todos done'>
            { Object.keys(doneTodos).map(id => <TodoItem key={id}
              todo={todos[id]} toggleTodo={toggleTodo}/>)}
          </ul>
      </li>
    )
  }
}

export default TodoListIndexItem
