import { connect } from 'react-redux'
import ToolCard from './tool_card'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolCard))
