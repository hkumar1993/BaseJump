import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions'

const EventsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_EVENTS:
      if(Boolean(action.events)){
        return action.events
      } else {
        return {}
      }
    case RECEIVE_EVENT:
      return Object.assign({}, state, { [action.event.id]: action.event })
    case REMOVE_EVENT:
      const newState = Object.assign({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

export default EventsReducer
