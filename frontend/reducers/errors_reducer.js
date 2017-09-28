import { combineReducers } from 'redux'
import SessionErrorsReducer from './session_errors_reducer'
import CompanyErrorsReducer from './company_errors_reducer'
import ProjectErrorsReducer from './project_errors_reducer'
import TodoListErrorsReducer from './todolist_errors_reducer'
import TodoErrorsReducer from './todo_errors_reducer'
import MessageErrorsReducer from './message_errors_reducer'
import CommentErrorsReducer from './comment_errors_reducer'
import EventErrorsReducer from './event_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  company: CompanyErrorsReducer,
  project: ProjectErrorsReducer,
  todolist: TodoListErrorsReducer,
  todo: TodoErrorsReducer,
  message: MessageErrorsReducer,
  comment: CommentErrorsReducer,
  event: EventErrorsReducer
})
