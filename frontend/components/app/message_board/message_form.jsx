import React from 'react'
import { Link } from 'react-router-dom'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      loading: false,
      message: {
        title: '',
        body: '',
        message_type: '',
        author_id: this.props.currentUser.id,
        project_id: this.props.projectId
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.resetStateMessage = this.resetStateMessage.bind(this)
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId)
  }

  componentWillReceiveProps(){
    setTimeout(() => this.setState({loading: false}), 500)
  }

  update(field) {
    return (e) => {
      e.preventDefault()
      const message = Object.assign({}, this.state.message, { [field]: e.target.value })
      this.setState({ message })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createMessage(this.state.message).
      then(this.props.history.push(`/${this.props.currentUser.id}/projects/${this.props.project.id}/messages`))
  }

  handleCancel(e){
    e.preventDefault()
    this.resetStateMessage()
  }

  resetStateMessage(){
    this.setState({
      message: {
        title: '',
        body: '',
        message_type: '',
        author_id: this.props.currentUser.id,
        project_id: this.props.projectId
      }
    })
  }

  render(){
    if(!this.props.project || this.state.loading){
      return (<div>Loading ...</div>)
    } else {
      console.log(this.state);
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}`}>
              <span>{this.props.project.name}</span>
            </Link>
             >
            <Link to={`/${this.props.currentUser.id}/projects/${this.props.project.id}/messages`}>
              <span>Message Board</span>
            </Link>
             > New Message
          </header>
          <div className='main-tool'>
            <div className='message-form'>
              <h2>What are you posting?</h2>
              <div className='message-types'>
                <a id='announcement' className='btn btn-normal'>Announcement</a>
                <a id='fyi' className='btn btn-normal'>FYI</a>
                <a id='heartbeat' className='btn btn-normal'>Heartbeat</a>
                <a id='pitch' className='btn btn-normal'>Pitch</a>
                <a id='question' className='btn btn-normal'>Question</a>
                <a id='something' className='btn btn-submit'>Something else</a>
              </div>
              <div className='message-form-inputs'>
                <form>
                  <input value={this.state.message.title} type='text' className='message-title' placeholder='Title...'
                    onChange={this.update('title')} />
                  <textarea value={this.state.message.body} className='message-body' placeholder='Write away...'
                    onChange={this.update('body')}></textarea>
                  <div>
                    <input onClick={this.handleSubmit} type='submit' className='btn btn-submit' value='Post this message' />
                    <input onClick={this.handleCancel} type='submit' className='btn btn-cancel' value='Cancel' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MessageForm
