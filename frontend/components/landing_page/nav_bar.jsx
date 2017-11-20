import React from 'react'
import { Link } from 'react-router-dom'
import BasecampLogo from '../../images/basejump_logo.svg'

const NavBar = (props) => {
  return (
  <nav className='landing-nav'>
    <Link to='/' className='logo'>
      <img src={BasecampLogo}/>
    </Link>
    <ul>
      <li>
        <Link to='/login'>Sign In</Link>
      </li>
      <li>
        <Link to='signup' className='btn btn-primary'>Sign Up</Link>
      </li>
    </ul>
  </nav>
)}

export default NavBar
