import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import LandingPage from './landing_page/main'
import AppContainer from './app/main_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SessionFormContainer from './session/session_form_container'
// const ProjectRedirect = (props) => {
//   return (
//     <Redirect to={`/${props.match.userId}/projects`} />
//   )
// }

const Root = ({store}) => {
  console.log(store.getState());
  return (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <AuthRoute exact path='/signup' component={SessionFormContainer} />
          <AuthRoute exact path='/login' component={SessionFormContainer} />
          <ProtectedRoute path='/:userId/projects' component={AppContainer}
            currentUser={store.getState().session.currentUser}/>
          <AuthRoute path='/' component={LandingPage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
)}

export default Root
