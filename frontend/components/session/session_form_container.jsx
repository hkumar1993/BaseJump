import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login, signup } from '../../actions/session_actions.js'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let user = {
    username: '',
    password: ''
  }
  return {
    user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1)
  const action = formType === 'login' ? login : signup
  return {
    processForm: user => dispatch(action(user)),
    formType
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm))
