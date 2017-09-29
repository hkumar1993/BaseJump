import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../loader'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      loading: false,
      message: {
        id: '',
        title: '',
        body: '',
        message_type: '',
        author_id: this.props.currentUser.id,
        project_id: this.props.projectId
      },
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
    this.resetStateMessage = this.resetStateMessage.bind(this)
    this.switchProjectType = this.switchProjectType.bind(this)
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId).
      then(res => {
        if(this.props.params.messageId){
          this.props.fetchMessage(this.props.params.messageId).
          then( res => this.setState({ message: Object.assign({}, res.message, {
            author_id: res.message.authorId,
            project_id: res.message.projectId
          })}))
        }
      })
  }

  componentWillReceiveProps(newProps){
    this.setState({errors: {}})
    setTimeout(() => this.setState({loading: false}), 750)
  }

  update(field) {
    return (e) => {
      this.setState({errors: {}})
      e.preventDefault()
      const message = Object.assign({}, this.state.message, { [field]: e.target.value })
      this.setState({ message })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processMessage(this.state.message).
      then(res => this.props.history.push(`/${this.props.currentUser.id}/projects/${this.props.project.id}/messages`)).
      fail(res => this.handleErrors(res.responseJSON.errors))
  }

  handleCancel(e){
    e.preventDefault()
    this.resetStateMessage()
    this.props.history.push(`/${this.props.currentUser.id}/projects/${this.props.project.id}/messages`)
  }

  handleErrors(err){
    let errors = {}
    err.forEach(error => {
      const key = error.split(' ')[0].toLowerCase()
      errors = Object.assign({}, errors, {[key]: error})
    })
    this.setState({errors})
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

  switchProjectType(id) {
    return () => {
      console.log(id);
      $('.message-types .btn').removeClass('btn-submit').addClass('btn-normal')
      $(id).removeClass('btn-normal').addClass('btn-submit')
      const message = Object.assign({}, this.state.message, { message_type: id.slice(1) })
      this.setState({ message })
    }
  }



  render(){
    if(!this.props.project || this.state.loading){
      return (<Loading />)
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
                <a onClick={this.switchProjectType('#announcement')} id='announcement' className='btn btn-normal'>Announcement</a>
                <a onClick={this.switchProjectType('#fyi')} id='fyi' className='btn btn-normal'>FYI</a>
                <a onClick={this.switchProjectType('#heartbeat')} id='heartbeat' className='btn btn-normal'>Heartbeat</a>
                <a onClick={this.switchProjectType('#pitch')} id='pitch' className='btn btn-normal'>Pitch</a>
                <a onClick={this.switchProjectType('#question')} id='question' className='btn btn-normal'>Question</a>
                <a onClick={this.switchProjectType('#something')} id='something' className='btn btn-submit'>Something else</a>
              </div>
              <div className='message-form-inputs'>
                <form>
                  <input value={this.state.message.title} type='text' className={this.state.errors.title ? 'invalid-input' : ''} placeholder='Title...'
                    onChange={this.update('title')} />
                  <textarea value={this.state.message.body} className={this.state.errors.body ? 'invalid-input' : ''} placeholder='Write away...'
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
