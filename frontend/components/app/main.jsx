import React from 'react'
import NavBarContainer from './nav_bar_container'
import PageContentContainer from './page_content_container'
import ProjectShowContainer from './project/project_show_container'
import { Switch, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <div className='main-app'>
      <NavBarContainer />
      <Switch>
        <Route path='/:userId/projects/:projectId' component={ProjectShowContainer}/>
        <Route path='/:userId/projects' component={PageContentContainer}/>
      </Switch>
    </div>
  )
}
export default App
