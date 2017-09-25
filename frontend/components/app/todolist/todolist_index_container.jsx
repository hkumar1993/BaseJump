import { connect } from 'react-redux'
import TodoListIndex from './todolist_index'
import { fetchProjectTodoLists } from '../../../actions/todolist_actions'
import { fetchProjectTodos } from '../../../actions/todo_actions'
import { fetchProject } from '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const todoLists = state.entities.todoLists ? Object.values(state.entities.todoLists) : state.entities.todoLists
  const todos = state.entities.todos
  const projectId = ownProps.match.params.projectId
  const project  = state.entities.projects[projectId]
  const params = ownProps.match.params
  return {
    todoLists,
    todos,
    projectId,
    project,
    params
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProjectTodoLists: id => dispatch(fetchProjectTodoLists(id)),
    fetchProjectTodos: id => dispatch(fetchProjectTodos(id)),
    fetchProject: id => dispatch(fetchProject(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex)
