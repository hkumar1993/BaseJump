import * as APIUtil from '../util/session_api_util';
import { fetchUser } from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const fetchCurrentUser = id => dispatch => {
  return fetchUser(id).
  then(res => dispatch(receiveCurrentUser(res.user))).
  fail(res => dispatch(receiveErrors(res.responseJSON.errors)))
}

export const login = user => dispatch => {
  return APIUtil.login(user).
    then(res => dispatch(receiveCurrentUser(res.user))).
    fail(res => dispatch(receiveErrors(res.responseJSON.errors)))
}

export const signup = user => dispatch => {
  return APIUtil.signup(user).
    then(res => dispatch(receiveCurrentUser(res.user))).
    fail(res => dispatch(receiveErrors(res.responseJSON.errors)))
}

export const logout = () => dispatch => {
  return APIUtil.logout().
  then(res => dispatch(receiveCurrentUser(null))).
  fail(res => dispatch(receiveErrors(res.responseJSON.errors)))
}

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})
