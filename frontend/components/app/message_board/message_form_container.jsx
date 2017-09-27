import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MessageForm from './message_form'
import { createMessage, fetchMessage, updateMessage } from '../../../actions/message_actions'
import { fetchProject } from '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser
  const projectId = ownProps.match.params.projectId
  const project = state.entities.projects[projectId]
  const errors = state.errors.message
  const params = ownProps.match.params
  return {
    currentUser,
    projectId,
    project,
    errors,
    params
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const processMessage = ownProps.match.params.messageId ? updateMessage : createMessage
  return {
    processMessage: message => dispatch(processMessage(message)),
    fetchMessage: message => dispatch(fetchMessage(message)),
    fetchProject: id => dispatch(fetchProject(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm))
