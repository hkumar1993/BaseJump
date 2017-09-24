import { RECEIVE_TODOLISTS, RECEIVE_TODOLIST, RECEIVE_TODOLIST_ERRORS } from '../actions/todolist_actions'

const TodoListErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TODOLISTS:
      return []
    case RECEIVE_TODOLIST:
      return []
    case RECEIVE_TODOLIST_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default TodoListErrorsReducer
