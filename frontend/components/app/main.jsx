import React from 'react'
import NavBarContainer from './nav_bar_container'
import PageContent from './page_content'

const App = (props) => {
  console.log('Im here in App!');
  console.log("Props", props);
  return (
    <div className='main-app'>
      <NavBarContainer />
      <PageContent />
    </div>
)
}
export default App
