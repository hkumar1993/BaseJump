import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS'

export const fetchProjectMessages = (id) => dispatch => {
  return APIUtil.fetchProjectMessages(id).
    then(res => dispatch(receiveMessages(res.messages))).
    fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors)))
}
export const fetchMessage = (id) => dispatch => {
  return APIUtil.fetchMessage(id).
    then(res => dispatch(receiveMessage(res.message))).
    fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors)))
}
export const createMessage = (message) => dispatch => {
  return APIUtil.createMessage(message).
    then(res => dispatch(receiveMessage(res.message))).
    fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors)))
}
export const updateMessage = (message) => dispatch => {
  return APIUtil.updateMessage(message).
    then(res => dispatch(receiveMessage(res.message))).
    fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors)))
}
export const deleteMessage = (id) => dispatch => {
  return APIUtil.deleteMessage(id).
    then(res => dispatch(removeMessage(id))).
    fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors)))
}


const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
})

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

const receiveMessageErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
})

const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id
})
