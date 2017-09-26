import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MessageShow from './message_show'
import { fetchMessage } from '../../../actions/message_actions'
import { fetchProject } from '../../../actions/project_actions'
import { fetchUser } from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    projectId: ownProps.match.params.projectId,
    currentUserId: ownProps.match.params.userId,
    messageId: ownProps.match.params.messageId,
    message: state.entities.messages[ownProps.match.params.messageId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMessage: id => dispatch(fetchMessage(id)),
    fetchProject: id => dispatch(fetchProject(id)),
    fetchUser: id => dispatch(fetchUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageShow)
