import React from 'react'
import UserIconDisplay from '../user_icon_display'

const CommentsIndexItem = props => {
  return (
    <li>
      <div className='comment'>
        <UserIconDisplay user={props.user} size={45} />
        <div>
          <h1>{props.user.name}</h1>
          <p>{props.comment.body}</p>
          <p>On {(new Date(props.comment.createdAt)).toDateString()}</p>
        </div>
      </div>
    </li>
  )
}

export default CommentsIndexItem
