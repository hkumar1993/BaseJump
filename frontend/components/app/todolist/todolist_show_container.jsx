import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoListShow from './todolist_show'
import { fetchTodoList } from '../../../actions/todolist_actions'
import { fetchTodoListTodos } from '../../../actions/todo_actions'

const mapStateToProps = (state, ownProps) => {
  const todoLists = state.entities.todoLists
  const todos = state.entities.todos
  return {
    todos,
    todoLists
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTodoList: id => dispatch(fetchTodoList(id)),
    fetchTodoListTodos: id => dispatch(fetchTodoListTodos(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListShow))
