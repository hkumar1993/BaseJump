import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import { fetchCompany } from './actions/company_actions'
import Root from './components/root'
import { fetchUserProjects, fetchProject } from './util/project_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let preLoadedState = {}
  if(window.currentUser){
    preLoadedState = Object.assign({}, preLoadedState, { session: {currentUser: window.currentUser}})
    delete window.currentUser
  }
  const store = configureStore(preLoadedState)
  window.dispatch = store.dispatch
  window.getState = store.getState
  window.fetchCompany = fetchCompany
  window.fetchProject = fetchProject
  window.fetchUserProjects = fetchUserProjects
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})
