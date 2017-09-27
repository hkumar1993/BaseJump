import { connect } from 'react-redux'
import CommentForm from './comment_form'
import { createComment, updateComment } from '../../../actions/comment_actions'

const mapStateToProps = ( state, ownProps ) => {
  return {
    comment: ownProps.comment,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = ( state, ownProps ) => {
  const processComment = ownProps.formType === 'edit' ? updateComment : createComment
  return {
    processComment: comment => dispatch(processComment(comment)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CommentForm )
