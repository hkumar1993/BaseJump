import * as APIUtil from '../util/event_api_util'

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const RECEIVE_EVENT = 'RECEIVE_EVENT'
export const REMOVE_EVENT = 'REMOVE_EVENT'
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS'

const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    event
  }
}

const removeEvent = id => {
  return {
    type: REMOVE_EVENT,
    id
  }
}

const receiveEventErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  }
}

export const fetchProjectEvents = id => dispatch => {
  return APIUtil.fetchProjectEvents(id).
    then(res => dispatch(receiveEvents(res.events))).
    fail(res => dispatch(receiveEventErrors(res.responseJSON.errors)))
}
export const fetchEvent = id => dispatch => {
  return APIUtil.fetchEvent(id).
    then(res => dispatch(receiveEvent(res.event))).
    fail(res => dispatch(receiveEventErrors(res.responseJSON.errors)))
}
export const createEvent = event => dispatch => {
  return APIUtil.createEvent(event).
    then(res => dispatch(receiveEvent(res.event))).
    fail(res => {
      console.log(res);
      dispatch(receiveEventErrors(res.responseJSON.errors))
    })
}
export const updateEvent = event => dispatch => {
  return APIUtil.updateEvent(event).
    then(res => dispatch(receiveEvent(res.event))).
    fail(res => dispatch(receiveEventErrors(res.responseJSON.errors)))
}
export const deleteEvent = id => dispatch => {
  return APIUtil.deleteEvent(id).
    then(res => dispatch(removeEvent(id))).
    fail(res => dispatch(receiveEventErrors(res.responseJSON.errors)))
}
