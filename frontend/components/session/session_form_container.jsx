import { connect } from 'react-redux'
import SessionForm from './session_form'
import { fetchCompany, updateCompany } from '../../actions/company_actions'
import { fetchUserProjects } from '../../actions/project_actions'
import { fetchCurrentUser } from '../../actions/session_actions'
import { login, signup } from '../../actions/session_actions.js'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  let user = {
    username: '',
    password: ''
  }
  return {
    user,
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1)
  const action = formType === 'login' ? login : signup
  return {
    fetchCompany: (id) => dispatch(fetchCompany(id)),
    updateCompany: (company) => dispatch(updateCompany(company)),
    fetchUserProjects: (id) => dispatch(fetchUserProjects(id)),
    fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
    processForm: user => dispatch(action(user)),
    formType
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm))
