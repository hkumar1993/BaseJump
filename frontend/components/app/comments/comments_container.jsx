import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentsIndex from './comments_index'
import { fetchTodoListComments, fetchMessageComments } from '../../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
  const parentId = ownProps.match.params.messageId ? ownProps.match.params.messageId : ownProps.match.params.listId
  return {
      comments: state.entities.comments,
      parentId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchComments = ownProps.match.params.messageId ? fetchMessageComments : fetchTodoListComments
  return {
    fetchComments: id => dispatch(fetchComments(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex))
