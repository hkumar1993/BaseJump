import React from 'react'
import { Link } from 'react-router-dom'
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
          <img src='https://37signals.com/images/basecamp-logo.png' />
        </Link>
        <div>
          <a onClick={this.toggleUserFuncs} className='btn btn-user'>
            {this.props.currentUser.name.slice(0,1)}</a>
          <ul id='user-funcs' className={`user-funcs-dropdown ${this.state.hidden ? 'hidden': ''}`}>
            <li>
              <a onClick={this.props.logout}>Logout</a>
            </li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default NavBar
