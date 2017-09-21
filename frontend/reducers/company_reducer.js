import { RECEIVE_COMPANY } from '../actions/company_actions'

const _emptyCompany = {}

const CompanyReducer = ( state = _emptyCompany, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company
    default:
      return state
  }
}

export default CompanyReducer
