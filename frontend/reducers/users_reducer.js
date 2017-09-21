import { RECEIVE_COMPANY_USERS } from '../actions/user_actions'

const _emptyUsers = {}

const UsersReducer = ( state = _emptyUsers, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_COMPANY_USERS:
      return action.users
    default:
      return state
  }
}

export default UsersReducer
