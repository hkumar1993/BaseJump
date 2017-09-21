import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
  <nav className='landing-nav'>
    <Link to='/' className='logo'>
      <img src='https://3.basecamp-static.com/bcxhq/assets/about/press/standard-basecamp-logo-ab9e0d21981d719a3c08c3b24fce0028f7cfd9d8af4106062bb55347967e6e9a.svg'/>
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
