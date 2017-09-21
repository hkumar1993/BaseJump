import { combineReducers } from 'redux'
import SessionErrorsReducer from './session_errors_reducer'
import CompanyErrorsReducer from './company_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  company: CompanyErrorsReducer,

})
