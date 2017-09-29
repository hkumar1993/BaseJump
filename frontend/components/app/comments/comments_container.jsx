import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentsIndex from './comments_index'
import { fetchTodoListComments, fetchMessageComments, fetchEventComments } from '../../../actions/comment_actions'
import { fetchCompanyUsers } from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  let parentId
  let parentType
  if (ownProps.match.params.messageId){
    parentId = ownProps.match.params.messageId
    parentType = 'message'
  } else if (ownProps.match.params.eventId) {
    parentId = ownProps.match.params.eventId
    parentType = 'event'
  } else {
    parentId = ownProps.match.params.listId
    parentType = 'todolist'
  }
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
  let fetchComments
  if (ownProps.match.params.messageId){
    fetchComments = fetchMessageComments
  } else if (ownProps.match.params.eventId) {
    fetchComments = fetchEventComments
  } else {
    fetchComments = fetchTodoListComments
  }

  return {
    fetchComments: id => dispatch(fetchComments(id)),
    fetchCompanyUsers: id => dispatch(fetchCompanyUsers(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex))
