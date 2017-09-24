import { connect } from 'react-redux'
import TodoListIndex from './todolist_index'
import { fetchProjectTodoLists } from '../../../actions/todolist_actions'
import { fetchProjectTodos } from '../../../actions/todo_actions'

const mapStateToProps = (state, ownProps) => {
  const todoLists = Object.values(state.entities.todoLists)
  const todos = state.entities.todos
  const projectId = ownProps.match.params.projectId
  return {
    todoLists,
    todos,
    projectId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProjectTodoLists: id => dispatch(fetchProjectTodoLists(id)),
    fetchProjectTodos: id => dispatch(fetchProjectTodos(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex)
