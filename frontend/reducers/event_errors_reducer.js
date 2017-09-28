import { RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
  RECEIVE_EVENT_ERRORS } from '../actions/event_actions'

const EventErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENTS || RECEIVE_EVENT || REMOVE_EVENT:
      return []
    case RECEIVE_EVENT_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default EventErrorsReducer
