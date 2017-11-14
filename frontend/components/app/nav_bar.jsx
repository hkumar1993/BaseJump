import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-simple-dropdown'
import { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'
import UserIconDisplay from './user_icon_display'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hidden: true }
    this.toggleUserFuncs = this.toggleUserFuncs.bind(this)
  }

  toggleUserFuncs(){
    const hidden = !this.state.hidden
    this.setState({hidden})
  }

  render(){
    const userId = this.props.currentUser.id
    return (
      <nav className='app-nav'>
        <Link to={`/${userId}/projects`} className='logo'>
          <img src='https://37signals.com/images/basecamp-logo.png' alt="Home"/>
        </Link>

        <Dropdown>
          <DropdownTrigger>
              <UserIconDisplay user={this.props.currentUser} size={30} />
          </DropdownTrigger>
          <DropdownContent>
            <ul id='user-funcs' className='user-funcs-dropdown'>
              <a onClick={this.props.logout}>
              <li>
                  <span>
                    Logout
                  </span>
              </li>
            </a>
            </ul>
          </DropdownContent>
        </Dropdown>

      </nav>
    )
  }
}

export default NavBar
