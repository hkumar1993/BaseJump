import React from 'react'
import NavBarContainer from './nav_bar_container'
import PageContentContainer from './page_content_container'

const App = (props) => {
  return (
    <div className='main-app'>
      <NavBarContainer />
      <PageContentContainer />
    </div>
)
}
export default App
