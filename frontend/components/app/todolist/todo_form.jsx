import React from 'react'

class TodoForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      assignees: [],
      description: '',
      todo_list_id: this.props.todoList.id,
      author_id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createTodo( this.state ).
      then(this.setState({
        title: '',
        assignees: [],
        description: '',
        todo_list_id: this.props.todoList.id,
        author_id: this.props.currentUser.id
      }))
  }

  handleCancel(e){
    e.preventDefault()
    this.setState( {
      title: '',
      assignees: [],
      description: '',
      todo_list_id: this.props.todoList.id,
      author_id: this.props.currentUser.id
    } )
  }

  update(field){
    return (e) => {
      let value = e.target.value
      if( field === 'assignees' ){
        value = value.split(',')
      }
      this.setState({ [field]: value })
    }
  }

  render(){
    return (
      <div className='tool-form' id={`new-todo-list-${this.props.todoList.id}`}>
        <form>
          <div className='input-fields'>
            <input type='text' placeholder='Add a new to-do...'
              onChange={this.update('title')} value={this.state.title} />
            <input type='text' placeholder='Assign to...'
              onChange={this.update('assignees')} value={this.state.assignees.join(',')}/>
            <input type='text' placeholder='Add a extra details...'
              onChange={this.update('description')} value={this.state.description} />
          </div>
          <div className='submit-buttons'>
            <input type='submit' value='Add this to-do'
              className='btn btn-submit' onClick={this.handleSubmit}/>
            <input type='submit' value='Cancel'
              className='btn btn-cancel' onClick={this.handleCancel}/>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoForm
