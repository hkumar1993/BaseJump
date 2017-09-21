import React from 'react'
import NavBarContainer from './nav_bar_container'

const App = (props) => {
  console.log('Im here in App!');
  console.log("Props", props);
  return (
    <div className='main-app'>
      <h1>Inside the App</h1>
      <NavBarContainer />
    </div>
)
}
export default App
