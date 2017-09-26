import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MessageBoard from './message_board'
import { fetchProject } from '../../../actions/project_actions'
import { fetchProjectMessages } from '../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId]
  const currentUser = state.session.currentUser
  const messages = Object.values(state.entities.messages)
  return {
    project,
    currentUser,
    messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchProjectMessages: id => dispatch(fetchProjectMessages(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageBoard))
