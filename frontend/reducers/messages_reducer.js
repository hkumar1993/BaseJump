import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions'

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { [action.message.id]: action.message })
    case REMOVE_MESSAGE:
      const newState = Object.assign({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

export default MessagesReducer
