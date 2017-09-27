import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MessageBoard from './message_board'
import { fetchProject } from '../../../actions/project_actions'
import { fetchProjectMessages } from '../../../actions/message_actions'
import { fetchCompanyUsers, fetchUser } from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId]
  const currentUser = state.session.currentUser
  const messages = Object.values(state.entities.messages)
  const users = state.entities.users
  return {
    project,
    currentUser,
    messages,
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchProjectMessages: id => dispatch(fetchProjectMessages(id)),
    fetchCompanyUsers: id => dispatch(fetchCompanyUsers(id)),
    fetchUser: id => dispatch(fetchUser(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageBoard))
