import React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return { loggedIn: Boolean(state.session.currentUser), currentUser: state.session.currentUser}
}

const Auth = ( { component: Component, path, loggedIn, currentUser } ) => (
  <Route path={path} render={
    (props) => (
      !loggedIn ? (<Component {...props} />) : (<Redirect to={`/${currentUser.id}/projects`} />)
    )
  } />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))

const Protected = ( { component: Component, path, loggedIn, match, history } ) => {
  console.log("params", match.params);
  console.log("history", history);
  return(
  <Route path={path} render={
    (props) => (
      loggedIn ? (<Component {...props} />) : (<Redirect to='/' />)
    )
  } />
)}

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
