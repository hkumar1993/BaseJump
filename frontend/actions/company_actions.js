import * as APIUtil from '../util/company_api_util'
import { fetchCompanyUsers } from './user_actions'

export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'
export const RECEIVE_COMPANY_ERRORS = 'RECEIVE_COMPANY_ERRORS'

const receiveCompany = company => {
  return {
    type: RECEIVE_COMPANY,
    company
  }
}

const receiveCompanyErrors = errors => {
  return {
    type: RECEIVE_COMPANY_ERRORS,
    errors
  }
}

export const fetchCompany = id => dispatch => {
  return APIUtil.fetchCompany(id).
    then(res => dispatch(receiveCompany(res.company))).
    then(res => dispatch(fetchCompanyUsers(res.company.id))).
    fail(res => dispatch(receiveCompanyErrors(res.responseJSON.errors)))
}

export const updateCompany = company => dispatch => {
  return APIUtil.fetchCompany(company).
    then(res => dispatch(receiveCompany(res))).
    fail(res => dispatch(receiveCompanyErrors(res.responseJSON.errors)))
}
