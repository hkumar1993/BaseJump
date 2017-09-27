import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENT_ERRORS } from '../actions/company_actions'


const CommentErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors

    case RECEIVE_COMMENTS || RECEIVE_COMMENT || REMOVE_COMMENT:
      return []

    default:
      return state
  }
}

export default CommentErrorsReducer
