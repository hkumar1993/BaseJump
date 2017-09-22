import { RECEIVE_PROJECT, RECEIVE_USER_PROJECTS } from '../actions/project_actions'

const _emptyProjects = {}

const ProjectsReducer = (state = _emptyProjects, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_USER_PROJECTS:
      return action.projects
    case RECEIVE_PROJECT:
      return Object.assign({}, state, { [action.project.id]: action.project })
    default:
      return state
  }
}

export default ProjectsReducer
