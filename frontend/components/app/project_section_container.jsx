import { connect } from 'react-redux'
import { fetchUserProjects } from '../../actions/project_actions'
import ProjectSection from './project_section'

const mapStateToProps = (state, ownProps) => {
  const projects = Object.values(state.entities.projects).filter(project => project.projectType === ownProps.projectType)
  return ({
    currentUser: state.session.currentUser,
    company: state.entities.company,
    projects
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUserProjects: (id, projectType) => dispatch(fetchUserProjects(id, projectType))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSection)
