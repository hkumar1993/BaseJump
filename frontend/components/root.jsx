import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route} from 'react-router-dom'
import LandingPage from './landing_page/main'
import App from './app/main'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <AuthRoute to='/' component={LandingPage} />
        <ProtectedRoute to='/:userId/projects' component={App} />
      </div>
    </HashRouter>
  </Provider>
)

export default Root
