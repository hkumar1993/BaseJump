import { connect } from 'react-redux'
import { fetchCompany, updateCompany } from '../../actions/company_actions'
import PageContent from './page_content'

const mapStateToProps = state => ({
  companyId: state.session.currentUser.companyId,
  company: state.entities.company
})

const mapDispatchToProps = dispatch => ({
  fetchCompany: (id) => dispatch(fetchCompany(id)),
  updateCompany: (company) => dispatch(updateCompany(company)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageContent)
