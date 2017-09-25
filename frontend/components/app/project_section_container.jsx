import { connect } from 'react-redux'
import { fetchUserProjects, postProject } from '../../actions/project_actions'
import ProjectSection from './project_section'

const mapStateToProps = (state, ownProps) => {
  const projects = Object.values(state.entities.projects).filter(project => project.projectType === ownProps.projectType)
  const _emptyProject = {name: '', project_type: '', admin_id: ''}
  return ({
    currentUser: state.session.currentUser,
    company: state.entities.company,
    projects
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUserProjects: (id, projectType) => dispatch(fetchUserProjects(id, projectType)),
  postProject: (project) => dispatch(postProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSection)
