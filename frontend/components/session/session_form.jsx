import React from 'react'
import {Link} from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.signUpInputs = this.signUpInputs.bind(this)
    this.redirectLink = this.redirectLink.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('State', this.state);
    this.props.processForm(this.state)
  }

  signUpInputs(){
    // console.log("Inside signupinputs");
    if(this.props.formType === 'signup'){
      return(
        <div>
          <label>
            Name
            <input type='text' onChange={this.update('name')} placeholder='John Doe'/>
          </label>
          <label>
            Email
            <input type='text' onChange={this.update('email')} placeholder='John Doe'/>
          </label>
          <label>
            Company
            <input type='text' onChange={this.update('company')} placeholder='John Doe'/>
          </label>
        </div>
      )
    }
  }

  redirectLink(){
    if(this.props.formType === "login"){
      return (
        <span>
          Don't have an account? <Link to='/signup'>Sign up here!</Link>
        </span>
      )
    } else {
      return (
        <span>
          Already have an account? <Link to='/login'>Sign in here!</Link>
        </span>
      )
    }
  }

  render(){
    const formType = this.props.formType
    return (
      <div>
        <img src='#' />
        <form onSubmit={this.handleSubmit}>
          {this.signUpInputs()}
          <label>
            Username
            <input type='text' onChange={this.update('username')} placeholder='john@doe.com'/>
          </label>
          <label>
            Password
            <input type='password' onChange={this.update('password')}/>
          </label>

          <input type='submit' value={formType === 'login' ? 'Login' : 'Sign Up'}/>
        </form>
        {this.redirectLink()}
      </div>
    )
  }

}

export default SessionForm
