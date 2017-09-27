import { combineReducers } from 'redux'
import SessionErrorsReducer from './session_errors_reducer'
import CompanyReducer from './company_reducer'
import UsersReducer from './users_reducer'
import ProjectsReducer from './projects_reducer'
import TodoListsReducer from './todolists_reducer'
import TodosReducer from './todos_reducer'
import MessagesReducer from './messages_reducer'
import CommentsReducer from './comments_reducer'

export default combineReducers({
  comments: CommentsReducer,
  company: CompanyReducer,
  users: UsersReducer,
  projects: ProjectsReducer,
  todoLists: TodoListsReducer,
  todos: TodosReducer,
  messages: MessagesReducer,
})
