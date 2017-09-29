import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EventShow from './event_show'
import { fetchProject } from '../../../actions/project_actions'
import { fetchEvent } from '../../../actions/event_actions'
import { fetchUser } from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    projectId: ownProps.match.params.projectId,
    eventId: ownProps.match.params.eventId,
    currentUser: state.session.currentUser,
    project: state.entities.projects[ownProps.match.params.projectId],
    event: state.entities.events[ownProps.match.params.eventId],
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchUser: id => dispatch(fetchUser(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow))
