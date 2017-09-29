import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchEvent, createEvent, updateEvent } from '../../../actions/event_actions'
import { fetchProject } from '../../../actions/project_actions'
import EventForm from './event_form'

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.params.eventId ? 'edit' : 'new'
  return {
    formType,
    currentUser: state.session.currentUser,
    params: ownProps.match.params,
    projectId: ownProps.match.params.projectId,
    project: state.entities.projects[ownProps.match.params.projectId]

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const processEvent = ownProps.match.params.eventId ? updateEvent : createEvent
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchEvent: id => dispatch(fetchEvent(id)),
    processEvent: event => dispatch(processEvent(event))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm))
