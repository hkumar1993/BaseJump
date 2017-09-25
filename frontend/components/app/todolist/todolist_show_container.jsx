import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoListShow from './todolist_show'
import { fetchTodoList } from '../../../actions/todolist_actions'
import { fetchTodoListTodos, fetchProjectTodos, toggleTodo, createTodo } from '../../../actions/todo_actions'
import { fetchProject } from '../../../actions/project_actions'
const mapStateToProps = (state, ownProps) => {
  const todos = state.entities.todos
  const params = ownProps.match.params
  const currentUser = state.session.currentUser
  const todoList = state.entities.todoLists[params.listId]
  const project = state.entities.projects[params.projectId]
  return {
    todos,
    todoList,
    params,
    currentUser,
    project
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchTodoList: id => dispatch(fetchTodoList(id)),
    fetchProjectTodos: id => dispatch(fetchProjectTodos(id)),
    fetchProjectTodos: id => dispatch(fetchProjectTodos(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    createTodo: todo => dispatch(createTodo(todo))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListShow))
