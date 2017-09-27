import React from 'react'
import { Link } from 'react-router-dom'
import UserIconDisplay from '../user_icon_display'

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
          <UserIconDisplay user={this.props.author} size={50}/>
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
