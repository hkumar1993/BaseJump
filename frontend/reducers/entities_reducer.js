import { combineReducers } from 'redux'
import SessionErrorsReducer from './session_errors_reducer'
import CompanyReducer from './company_reducer'
import UsersReducer from './users_reducer'
import ProjectsReducer from './projects_reducer'

export default combineReducers({
  company: CompanyReducer,
  users: UsersReducer,
  projects: ProjectsReducer
})
