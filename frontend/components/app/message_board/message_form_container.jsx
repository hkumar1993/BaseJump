import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MessageForm from './message_form'
import { createMessage } from '../../../actions/message_actions'
import { fetchProject } from '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser
  const projectId = ownProps.match.params.projectId
  const project = state.entities.projects[projectId]
  return {
    currentUser,
    projectId,
    project
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createMessage: message => dispatch(createMessage(message)),
    fetchProject: id => dispatch(fetchProject(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm))
