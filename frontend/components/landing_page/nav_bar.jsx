import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
  <nav className='landing-nav'>
    <span className='logo'>
      <img src='#' />
      <Link to='/'>Basejump</Link>
    </span>
    <ul>
      <li>
        <Link to='/login'>Sign In</Link>
        <Link to='/login'>Demo</Link>
        <Link to='signup'>
          <button>Sign Up</button>
        </Link>
      </li>
    </ul>
  </nav>
)}

export default NavBar
