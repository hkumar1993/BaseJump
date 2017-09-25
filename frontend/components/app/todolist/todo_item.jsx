import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  toggleDone(e){
    this
  }

  render(){
    return (
      <li className='todo'>
        <div className='check-box'>
          <input type='checkbox' id={`checkbox-${this.props.todo.id}`}/>
          <label htmlFor={`checkbox-${this.props.todo.id}`}>
          </label>
        </div>
        { this.props.todo.title }
      </li>
    )
  }
}

export default TodoItem
