import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions'

const TodosReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos
    case RECEIVE_TODO:
      return Object.assign({}, state, {[action.todo.id]: action.todo})
    default:
      return state
  }
}

export default TodosReducer
