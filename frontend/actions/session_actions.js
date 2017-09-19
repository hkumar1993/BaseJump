import * as APIUtils from '../util/session_api_utils'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'

const receiveCurrentUser = user => dispatch => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const receiveErrors = user => dispatch => ({
  type: RECEIVE_USER,
  user
})
