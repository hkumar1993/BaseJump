import React from 'react'

class TodoListForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      project_id: this.props.project.id,
      author_id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.update = this.update.bind(this)
    this.toggleHide = this.toggleHide.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createTodoList( this.state ).
    then( res => console.log('success',res)).
    then( this.setState( {
      title: '',
      description: '',
      project_id: this.props.project.id,
      author_id: this.props.currentUser.id
    } )).
    fail(res => console.log('fail',res))
  }

  handleCancel(e){
    e.preventDefault()
    this.setState( {
      title: '',
      description: '',
      project_id: this.props.project.id,
      author_id: this.props.currentUser.id
    } )
    this.toggleHide()
  }

  update(field){
    return (e) => {
      let value = e.target.value
      this.setState({ [field]: value })
    }
  }

  toggleHide(){
    $(`#add-todolist-${this.props.project.id}`).removeClass('hidden')
    $(`#new-todolist-${this.props.project.id}`).addClass('hidden')
  }


  render(){
    return (
      <div className='tool-form todolist hidden' id={`new-todolist-${this.props.project.id}`}>
        <form>
          <div className='input-fields'>
            <input type='text' placeholder='Name this list...'
              onChange={this.update('title')} value={this.state.title} />
            <input type='text' placeholder='Add a extra details...'
              onChange={this.update('description')} value={this.state.description} />
          </div>
          <div className='submit-buttons'>
            <input type='submit' value='Add this list'
              className='btn btn-submit' onClick={this.handleSubmit}/>
            <input type='submit' value='Cancel'
              className='btn btn-cancel' onClick={this.handleCancel}/>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoListForm
