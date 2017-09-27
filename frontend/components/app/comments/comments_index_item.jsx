import React from 'react'
import UserIconDisplay from '../user_icon_display'

const CommentsIndexItem = props => {
  return (
    <li>
      <div>
        <UserIconDisplay user={props.user} size={50} />
        <div>
          <h1>{props.user.name}</h1>
          <p>{props.comment.body}</p>
        </div>
      </div>
    </li>
  )
}

export default CommentsIndexItem
