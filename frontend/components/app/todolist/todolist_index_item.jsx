import React from 'react'
import TodoItem from './todo_item'
import { Link } from 'react-router-dom'

const TodoListIndexItem = ({todoList, todos, params}) => {
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
          { Object.keys(pendingTodos).map(id => <TodoItem key={id} todo={todos[id]} />)}
        </ul>
        <a className='btn btn-normal'>Add a to-do</a>
        <ul className='todos done'>
          { Object.keys(doneTodos).map(id => <TodoItem key={id} todo={todos[id]} />)}
        </ul>
    </li>
  )
}

export default TodoListIndexItem
