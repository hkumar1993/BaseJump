import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import { login, logout } from './actions/session_actions'
// import { login } from './util/session_api_util'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let preLoadedState = {}
  if(window.currentUser){
    preLoadedState = Object.assign({}, preLoadedState, { session: {currentUser: window.currentUser}})
    delete window.currentUser
  }
  const store = configureStore(preLoadedState)
  window.dispatch = store.dispatch
  window.getState = store.getState
  window.login = login
  window.logout = logout
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})
