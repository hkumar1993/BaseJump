import { connect } from 'react-redux'
import ProjectShow from './project_show'
import {fetchProject} from '../../../actions/project_actions'
import {fetchCompanyUsers} from '../../../actions/user_actions'
import {fetchUserProjects} from '../../../actions/project_actions'
import {fetchProjectEvents} from '../../../actions/event_actions'
import {fetchProjectTodoLists} from '../../../actions/todolist_actions'
import {fetchProjectMessages} from '../../../actions/message_actions'


const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId]
  const users = state.entities.users
  const currentUser = state.session.currentUser
  const projectIds = Object.keys(state.entities.projects)
  const currentProject = ownProps.match.params.projectId
  return {
    projectIds,
    project,
    users,
    currentUser,
    currentProject,
    messages: state.entities.messages,
    events: state.entities.events,
    todoLists: state.entities.todoLists,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchCompanyUsers: id => dispatch(fetchCompanyUsers(id)),
    fetchUserProjects: id => dispatch(fetchUserProjects(id)),
    fetchProjectEvents: id => dispatch(fetchProjectEvents(id)),
    fetchProjectMessages: id => dispatch(fetchProjectMessages(id)),
    fetchProjectTodoLists: id => dispatch(fetchProjectTodoLists(id)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
