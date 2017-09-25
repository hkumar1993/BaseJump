import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.toggleDone = this.toggleDone.bind(this)
  }

  toggleDone(e){
    e.preventDefault()
    this.props.toggleTodo(this.props.todo.id)
  }

  render(){
    return (
      <li className='todo'>
        <div className='check-box'>
          <input type='checkbox' id={`checkbox-${this.props.todo.id}`}
            onChange={this.toggleDone} checked={this.props.todo.done}/>
          <label htmlFor={`checkbox-${this.props.todo.id}`}>
          </label>
        </div>
        <span>{ this.props.todo.title }</span>
      </li>
    )
  }
}

export default TodoItem
