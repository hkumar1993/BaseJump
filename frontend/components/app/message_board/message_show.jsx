import React from 'react'
import { Link } from 'react-router-dom'

class MessageShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, createdAt: '', updatedAt: '', author: {} }
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId).
      then(this.props.fetchMessage(this.props.messageId))
  }

  componentWillReceiveProps(newProps){
    let createdAt
    let updatedAt
    let author
    console.log('new', newProps);
    this.props.fetchUser(newProps.message.authorId).
    then(() => {
      author =  this.props.users[message.authorId]
      createdAt = new Date(newProps.message.createdAt)
      updatedAt = new Date(newProps.message.updatedAt)
      createdAt = createdAt.toDateString()
      updatedAt = updatedAt.toDateString()
    }).
    then(setTimeout(() => this.setState({ loading: false, createdAt, updatedAt, author }), 500))
  }



  render(){
    if(!this.props.message || this.state.loading){
      return (<div>Loading ...</div>)
    } else {
      console.log(this.state);
      return (
        <div className='tool-page'>
          <header>
            <Link to={`/${this.props.currentUserId}/projects/${this.props.projectId}`}>
              <span>{this.props.project.name}</span>
            </Link>
             >
            <Link to={`/${this.props.currentUserId}/projects/${this.props.projectId}/messages`}>
              <span>Message Board</span>
            </Link>
             > {this.props.message.title}
          </header>
          <div className='main-tool'>
            <div className='author-details'>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MessageShow
