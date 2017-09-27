import { connect } from 'react-redux'
import ProjectShow from './project_show'
import {fetchProject} from '../../../actions/project_actions'
import {fetchCompanyUsers} from '../../../actions/user_actions'
import {fetchUserProjects} from '../../../actions/project_actions'

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
    currentProject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchCompanyUsers: id => dispatch(fetchCompanyUsers(id)),
    fetchUserProjects: id => dispatch(fetchUserProjects(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
