import { RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS } from '../actions/message_actions'

const MessageErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES || RECEIVE_MESSAGE || REMOVE_MESSAGE:
      return []
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default MessageErrorsReducer
