import { connect } from 'react-redux'
import TodoListIndex from './todolist_index'
import { fetchProjectTodoLists, createTodoList } from '../../../actions/todolist_actions'
import { fetchProjectTodos, toggleTodo, createTodo } from '../../../actions/todo_actions'
import { fetchProject } from '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const todoLists = state.entities.todoLists ? Object.values(state.entities.todoLists) : state.entities.todoLists
  const todos = state.entities.todos
  const projectId = ownProps.match.params.projectId
  const project  = state.entities.projects[projectId]
  const params = ownProps.match.params
  const currentUser = state.session.currentUser
  return {
    todoLists,
    todos,
    projectId,
    project,
    params,
    currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProjectTodoLists: id => dispatch(fetchProjectTodoLists(id)),
    fetchProjectTodos: id => dispatch(fetchProjectTodos(id)),
    fetchTodoListTodos: id => dispatch(fetchTodoListTodos(id)),
    fetchProject: id => dispatch(fetchProject(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    createTodoList: todo_list => dispatch(createTodoList(todo_list)),
    createTodo: todo => dispatch(createTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex)
