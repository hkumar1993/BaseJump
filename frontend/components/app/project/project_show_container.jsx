import { connect } from 'react-redux'
import ProjectShow from './project_show'
import {fetchProject} from '../../../actions/project_actions'
import {fetchCompanyUsers} from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  const projectIds = Object.keys(state.entities.projects)
  const project = state.entities.projects[ownProps.match.params.projectId]
  const users = state.entities.users
  const currentUser = state.session.currentUser
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
    fetchCompanyUsers: id => dispatch(fetchCompanyUsers(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
