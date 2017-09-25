import { connect } from 'react-redux'
import App from './main'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser.id
  }
}

export default withRouter(connect(mapStateToProps)(App))
