import { connect } from 'react-redux'
import ProjectShow from './project_show'
import {fetchProject} from '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId]
  return {
    project
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
