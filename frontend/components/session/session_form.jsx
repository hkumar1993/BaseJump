import React from 'react'
import {Link} from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props) {
    console.log('Im here in Session Form!');
    super(props)
    this.state = {user: this.props.user, errors: {}}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.signUpInputs = this.signUpInputs.bind(this)
    this.redirectLink = this.redirectLink.bind(this)
    this.formHeader = this.formHeader.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
    this.demo = this.demo.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({errors: {}})
      const user = Object.assign({}, this.state.user, {[field]: e.target.value})
      this.setState({user})
    }
  }

  componentWillReceiveProps(){
    this.setState({errors: {}})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('State', this.state);
    this.props.processForm(this.state.user).
      fail(res => this.handleErrors(res.responseJSON.errors))
  }

  handleErrors(err){
    let errors = {}
    err.forEach(error => {
      console.log(error);
      const key = error.split(' ')[0].toLowerCase()
      errors = Object.assign({}, errors, {[key]: error})
      console.log(errors);
    })
    this.setState({errors})
    console.log('state', this.state);
  }

  signUpInputs(){
    // console.log("Inside signupinputs");
    if(this.props.formType === 'signup'){
      return(
        <div className='signup-fields'>
          <label>
            Name
          </label>
          <input className={Boolean(this.state.errors['name']) ? 'invalid-input' : ''}
            type='text' onChange={this.update('name')} placeholder='John Doe'/>
          <span className='form-errors'>{this.state.errors['name']}</span>
          <br/>
          <label>
            Email
          </label>
          <input className={Boolean(this.state.errors['email']) ? 'invalid-input' : ''}
            type='text' onChange={this.update('email')} placeholder='john@doe.com'/>
          <span className='form-errors'>{this.state.errors['email']}</span>
          <br/>
          <label>
            Company
          </label>
          <input className={Boolean(this.state.errors['company']) ? 'invalid-input' : ''}
            type='text' onChange={this.update('company')} placeholder="John's Dough Company"/>
          <span className='form-errors'>{this.state.errors['company']}</span>
          <br/>
        </div>
      )
    }
  }

  demoLogin(){
    if(this.props.formType === 'login'){
      return (
        <input className='btn btn-submit' type='submit' value='Demo Login' onClick={this.demo}/>
      )
    }
  }

  demo(){
    this.setState({user: {username: 'johndoe', password: 'password'}})
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

        <form onSubmit={this.handleSubmit}
          className={`session-form ${formType === 'login' ? '' : 'sign-up-form'}`}>
          {this.formHeader()}
          {this.signUpInputs()}
          <label>
            Username
          </label>
          <input className={Boolean(this.state.errors['username']) ? 'invalid-input' : ''}
            type='text' onChange={this.update('username')} placeholder='johndoe'/>
          <span className='form-errors'>{this.state.errors['username']}</span>
          <label>
            Password
          </label>
          <input className={Boolean(this.state.errors['password']) ? 'invalid-input' : ''}
            type='password' onChange={this.update('password')}/>
          <span className='form-errors'>{this.state.errors['password']}</span>
          <br/>
          <input className='btn btn-submit' type='submit'
            value={formType === 'login' ? 'Login' : 'Sign Up'}/>
          {
            this.demoLogin()
          }
        </form>
        {this.redirectLink()}
      </div>
    )
  }

}

export default SessionForm
