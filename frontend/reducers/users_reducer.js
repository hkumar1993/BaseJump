import { RECEIVE_COMPANY_USERS, RECEIVE_USER } from '../actions/user_actions'

const _emptyUsers = {}

const UsersReducer = ( state = _emptyUsers, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_COMPANY_USERS:
      return action.users
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    default:
      return state
  }
}

export default UsersReducer
