import { RECEIVE_COMPANY_USERS, RECEIVE_USER, RECEIVE_USER_ERRORS } from '../actions/user_actions'

const UserErrorsReducer = ( state = [], action ) => {
  switch (action.type) {
    case RECEIVE_COMPANY_USERS || RECEIVE_USER:
      return []
    case RECEIVE_USER_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default UserErrorsReducer
