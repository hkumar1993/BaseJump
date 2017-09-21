import React from 'react'
import NavBar from './nav_bar'
import { Route } from 'react-router-dom'
import SessionFormContainer from '../session/session_form_container'
import PageContent from './page_content'


class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <Route exact path='/' component={NavBar} />
        <Route exact path='/' component={PageContent} />
      </div>
    )
  }
}

export default LandingPage
