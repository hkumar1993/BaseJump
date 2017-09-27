import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentsIndex from './comments_index'
import { fetchTodoListComments, fetchMessageComments } from '../../../actions/comment_actions'
import { fetchCompanyUsers } from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  const parentId = ownProps.match.params.messageId ? ownProps.match.params.messageId : ownProps.match.params.listId
  const parentType = ownProps.match.params.messageId ? 'message' : 'todolist'
  const users = state.entities.users
  return {
      comments: state.entities.comments,
      parentId,
      currentUser: state.session.currentUser,
      parentType,
      users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchComments = ownProps.match.params.messageId ? fetchMessageComments : fetchTodoListComments
  return {
    fetchComments: id => dispatch(fetchComments(id)),
    fetchCompanyUsers: id => dispatch(fetchCompanyUsers(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex))
