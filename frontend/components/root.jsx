import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './landing_page/main'
import App from './app/main'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SessionFormContainer from './session/session_form_container'

const Root = ({store}) => {
  return (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <AuthRoute path='/signup' component={SessionFormContainer} />
          <AuthRoute path='/login' component={SessionFormContainer} />
          <ProtectedRoute path='/:userId' component={App} />
          <AuthRoute path='/' component={LandingPage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
)}

export default Root
