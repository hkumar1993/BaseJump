import { connect } from 'react-redux'
import App from './main'

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser.id
  }
}

export default connect(mapStateToProps)(App)
