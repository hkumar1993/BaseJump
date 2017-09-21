import * as APIUtil from '../util/user_api_util.js'

export const RECEIVE_COMPANY_USERS = 'RECEIVE_COMPANY_USERS'
export const RECEIVE_USER_ERRORS = 'RECEIVE_COMPANY_ERRORS'

const receiveCompanyUsers = users => {
  return {
    type: RECEIVE_COMPANY_USERS,
    users
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
