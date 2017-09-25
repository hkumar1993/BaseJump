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

const Protected = ( props ) => {
  const Component = props.component
  const path = props.path
  const loggedIn = props.loggedIn
  const match = props.match
  const history = props.history
  const currentUser = props.currentUser
  const userId = parseInt(props.computedMatch.params.userId)
  if(currentUser && currentUser.id === userId){
    return(
      <Route path={path} render={
          (props) => (
            loggedIn ? (<Component {...props} />) : (<Redirect to='/' />)
          )
        } />
      )
  } else if(Boolean(currentUser)) {
    return (<Redirect to={`/${currentUser.id}/projects`} />)
  } else {
    return (<Redirect to='/' />)
  }
}

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
