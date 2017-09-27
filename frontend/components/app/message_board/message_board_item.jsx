import React from 'react'
import { Link } from 'react-router-dom'

class MessageBoardItem extends React.Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    if(this.props.message && !this.props.author){
      this.props.fetchUser(this.props.message.id)
    }
  }

  render(){
    const props = this.props
    console.log('Props!',props);
    return (
      <Link to={`/${props.params.userId}/projects/${props.params.projectId}/messages/${props.message.id}`}>
        <li className='message-board-item'>
          <div className='author-image'>
            <span className='btn btn-user'>{props.author.name.slice(0,1)}</span>
          </div>
          <div className='message-details'>
            <h1>{props.message.title}</h1>
            <span>{props.message.body}</span>
          </div>
        </li>
      </Link>
    )
  }

}

export default MessageBoardItem
