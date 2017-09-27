import { connect } from 'react-redux'
import { fetchCompany, updateCompany } from '../../actions/company_actions'
import { fetchUserProjects } from '../../actions/project_actions'
import { fetchCurrentUser } from '../../actions/session_actions'
import PageContent from './page_content'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  companyId: state.session.currentUser.companyId,
  company: state.entities.company,
  projects: Object.values(state.entities.projects),
  users: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
  fetchCompany: (id) => dispatch(fetchCompany(id)),
  updateCompany: (company) => dispatch(updateCompany(company)),
  fetchUserProjects: (id) => dispatch(fetchUserProjects(id)),
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageContent)
