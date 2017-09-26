import * as APIUtil from '../util/user_api_util.js'

export const RECEIVE_COMPANY_USERS = 'RECEIVE_COMPANY_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

const receiveCompanyUsers = users => {
  return {
    type: RECEIVE_COMPANY_USERS,
    users
  }
}

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
}

export const fetchCompanyUsers = id => dispatch => {
  return APIUtil.fetchCompanyUsers(id).
    then(res => dispatch(receiveCompanyUsers(res.users))).
    fail(res => dispatch(receiveUserErrors(res.responseJSON.errors)))
}

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).
    then(res => dispatch(receiveUser(res.user))).
    fail(res => dispatch(receiveUserErrors(res.responseJSON.errors)))
}
