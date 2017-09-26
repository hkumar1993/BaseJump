import React from 'react'
import TextEditor from 'ship-components-texteditor'

const MessageBoardItem = props => {
  return (
    <li className='message-board-item'>
      <h1>{props.message.title}</h1>
    </li>
  )
}

export default MessageBoardItem
