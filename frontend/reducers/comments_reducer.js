import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'

const CommentsReducer = (state = {}, action ) => {
  console.log('Action', action);
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_COMMENTS:
      if (Boolean(action.comments)){
        return action.comments
      } else {
        return {}
      }
    case RECEIVE_COMMENT:
      return Object.assign({}, state, {[action.comment.id]: action.comment})
    case REMOVE_COMMENT:
      const newState = Object.assign({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

export default CommentsReducer
