import React from 'react'

const TodoListIndexItem = ({todoList, todos}) => {
  console.log(todoList);
  console.log(todos);
  return (
    <li className='todolist-item'>
      <div>
        <h1>{todoList.title}</h1>
        <ul className='todos'>
          { todoList.todoIds.map(id => <li key={id}>{todos[id].title}</li>)}
        </ul>
      </div>
    </li>
  )
}

export default TodoListIndexItem
