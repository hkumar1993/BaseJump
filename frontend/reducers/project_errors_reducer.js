import { RECEIVE_PROJECT, RECEIVE_USER_PROJECTS, RECEIVE_PROJECT_ERRORS } from '../actions/project_actions'

const _emptyErrors = []

const ProjectErrorsReducer = (state = _emptyErrors, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROJECTS:
      return _emptyErrors
    case RECEIVE_PROJECT:
      return _emptyErrors
    case RECEIVE_PROJECT_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default ProjectErrorsReducer
