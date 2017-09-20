import React from 'react'
import {Link} from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props) {
    console.log('Im here in Session Form!');
    super(props)
    this.state = this.props.user
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.signUpInputs = this.signUpInputs.bind(this)
    this.redirectLink = this.redirectLink.bind(this)
    this.formHeader = this.formHeader.bind(this)
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
          </label>
          <input type='text' onChange={this.update('name')} placeholder='John Doe'/>
          <label>
            Email
          </label>
          <input type='text' onChange={this.update('email')} placeholder='John Doe'/>
          <label>
            Company
          </label>
          <input type='text' onChange={this.update('company')} placeholder="John's Dough Company"/>
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

  formHeader(){
    if(this.props.formType === "login"){
      const d = new Date();
      const day = d.getDay();
      const DAYS = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
      }
      return (
        <div className='formHeader'>
          <h3>
            Happy {DAYS[day]}!
          </h3>
          <p>Just enter your email address or username and we'll get you right into Basejump</p>
        </div>
      )
    } else {
      return (
        <div className='formHeader'>
          <span className='signup'>Sign up for Basejump</span>
          <p className='barred-span'>Type your email address</p>
        </div>
      )

    }
  }

  render(){
    const formType = this.props.formType
    return (
      <div className='form-page'>
        <Link to='/'>
          <img src='https://37signals.com/images/basecamp-logo.png' />
        </Link>

        <form onSubmit={this.handleSubmit} className={`session-form ${formType === 'login' ? '' : 'sign-up-form'}`}>
          {this.formHeader()}
          {this.signUpInputs()}
          <label>
            Username
          </label>
          <input type='text' onChange={this.update('username')} placeholder='john@doe.com'/>
          <label>
            Password
          </label>
          <input type='password' onChange={this.update('password')}/>

          <input className='btn btn-submit' type='submit' value={formType === 'login' ? 'Login' : 'Sign Up'}/>
        </form>
        {this.redirectLink()}
      </div>
    )
  }

}

export default SessionForm
