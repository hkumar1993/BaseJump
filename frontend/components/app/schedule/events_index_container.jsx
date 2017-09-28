import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EventsIndex from './events_index'
import { fetchProjectEvents } from '../../../actions/event_actions'
import { fetchUserProjects } from  '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    projectId: ownProps.match.params.projectId,
    project: state.entities.projects[ownProps.match.params.projectId],
    currentUser: state.session.currentUser,
    events: state.entities.events,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserProjects: id => dispatch(fetchUserProjects(id)),
    fetchProjectEvents: id => dispatch(fetchProjectEvents(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsIndex))
