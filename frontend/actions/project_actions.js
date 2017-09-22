import * as APIUtil from '../util/project_api_util'

export const RECEIVE_USER_PROJECTS = 'RECEIVE_USER_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS'

const receiveUserProjects = projects => ({
  type: RECEIVE_USER_PROJECTS,
  projects
})

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
})

const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
})

export const fetchUserProjects = (id, projectType) => dispatch => {
  return APIUtil.fetchUserProjects(id, projectType).
    then(res => dispatch(receiveUserProjects(res.projects))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}

export const fetchProject = id => dispatch => {
  return APIUtil.fetchProject(id).
    then(res => dispatch(receiveProject(res.project))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}
