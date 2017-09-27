import * as APIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

const receiveCommentErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

export const fetchTodoListComments = id => dispatch => {
  return APIUtil.fetchTodoListComments(id).
    then(res => dispatch(receiveComments(res.comments))).
    fail(res => dispatch(receiveCommentErrors(res.responseJSON.errors)))
}
export const fetchMessageComments = id => dispatch => {
  return APIUtil.fetchMessageComments(id).
    then(res => dispatch(receiveComments(res.comments))).
    fail(res => dispatch(receiveCommentErrors(res.responseJSON.errors)))
}
export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).
    then(res => dispatch(receiveComment(res.comment))).
    fail(res => dispatch(receiveCommentErrors(res.responseJSON.errors)))
}
export const updateComment = comment => dispatch => {
  return APIUtil.updateComment(comment).
    then(res => dispatch(receiveComment(res.comment))).
    fail(res => dispatch(receiveCommentErrors(res.responseJSON.errors)))
}
export const destroyComment = id => dispatch => {
  return APIUtil.destroyComment(id).
    then(res => dispatch(removeComment(id))).
    fail(res => dispatch(receiveCommentErrors(res.responseJSON.errors)))
}
