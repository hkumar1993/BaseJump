import { RECEIVE_COMPANY, RECEIVE_COMPANY_ERRORS } from '../actions/company_actions'

const _emptyErrors = []

const CompanyErrorsReducer = (state = _emptyErrors, action) => {
  switch (action.type) {
    case RECEIVE_COMPANY_ERRORS:
      return action.errors

    case RECEIVE_COMPANY:
      return _emptyErrors

    default:
      return state
  }
}

export default CompanyErrorsReducer
