import React from 'react'
import { Link } from 'react-router-dom'
const BasecampLogo = 'https://res.cloudinary.com/basejump/image/upload/v1580630150/basecamp-logo.svg'

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
        <Link to='/login' className='btn btn-primary'>Demo Login</Link>
      </li>
      <li>
        <Link to='signup' className='btn btn-primary'>Sign Up</Link>
      </li>
    </ul>
  </nav>
)}

export default NavBar
