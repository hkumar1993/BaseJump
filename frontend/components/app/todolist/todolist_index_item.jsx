import React from 'react'
import TodoItem from './todo_item'
import { Link } from 'react-router-dom'
import TodoForm from './todo_form'

class TodoListIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const todoList = this.props.todoList
    const todos = this.props.todos
    const params = this.props.params
    const toggleTodo = this.props.toggleTodo

    let doneTodos = {};
    let pendingTodos = {};

    Object.keys(todos).forEach(id => {
      if(todos[id].done){
        doneTodos = Object.assign({}, doneTodos, { [id]: todos[id] })
      } else {
        pendingTodos = Object.assign({}, pendingTodos, { [id]: todos[id] })
      }
    })

    console.log(doneTodos);
    console.log(pendingTodos);

    return (
      <li className='todolist-item'>
          <h1><Link to={`${params.userId}/projects/${params.projectId}/todolists/${todoList.id}`}>{todoList.title}</Link></h1>
          <ul className='todos pending'>
            { Object.keys(pendingTodos).map(id => <TodoItem key={id}
              todo={todos[id]} toggleTodo={toggleTodo}/>)}
          </ul>
          <a className='btn btn-normal'>Add a to-do</a>
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
