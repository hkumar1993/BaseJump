import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EventForm from './event_form'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm))
