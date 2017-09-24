import { RECEIVE_TODOLISTS, RECEIVE_TODOLIST} from '../actions/todolist_actions'

const TodoListsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_TODOLISTS:
      return action.todoLists
    case RECEIVE_TODOLIST:
      return Object.assign({}, state, {[action.todoList.id]: action.todoList})
    default:
      return state
  }
}

export default TodoListsReducer
