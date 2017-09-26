import React from 'react'
import { Link } from 'react-router-dom'
import titleize from 'titleize'

class MessageShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, createdAt: '', updatedAt: '', author: null }
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.fetchProject(this.props.projectId).
      then(res => this.props.fetchMessage(this.props.messageId)).
      then(res => {
        this.setState({
          createdAt: (new Date(res.message.createdAt)).toDateString(),
          updatedAt: (new Date(res.message.updatedAt)).toDateString(),
        })
        return this.props.fetchUser(res.message.authorId)
      }).
      then(res => this.setState({ author: res.user }))
  }

  componentWillReceiveProps(newProps){
    console.log('New', newProps);
    // if(newProps.messageId !== this.props.messageId){
    //   console.log('New message');
    //   this.props.fetchProject(this.props.projectId).
    //     then(this.props.fetchMessage(this.props.messageId))
    // }
    // if(this.props.message && !this.props.users[this.props.message.authorId]){
    //   console.log('new user');
    //   newProps.fetchUser(newProps.message.authorId).
    //
    // }
    // if(this.props.message && this.props.users[this.props.message.authorId]){
    //   this.setState({ author: newProps.users[newProps.message.authorId]})
    // }
    setTimeout(() => this.setState({ loading: false }), 500)
  }

  render(){
    console.log(this.state);
    if(!this.props.message || this.state.loading){
      return (<div>Loading ...</div>)
    } else {
      console.log('Type!!!',this.props.message.messageType);
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
            <div>
             { this.props.message.messageType === '' || this.props.message.messageType === 'something' ? 'Message' : `${titleize(this.props.message.messageType)}`}
             {` by `}
             { this.state.author.name }
             {` on `}
             { this.state.createdAt }
            </div>
            <div>
              <h1>{this.props.message.title}</h1>
              <p>{this.props.message.body}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MessageShow
