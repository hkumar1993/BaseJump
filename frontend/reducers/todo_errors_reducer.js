import { RECEIVE_TODOS, RECEIVE_TODO, RECEIVE_TODO_ERRORS } from '../actions/todo_actions'

const TodoErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return []
    case RECEIVE_TODO:
      return []
    case RECEIVE_TODO_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default TodoErrorsReducer
