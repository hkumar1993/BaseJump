import React from 'react'
import {Link} from 'react-router-dom'
import Loading from '../app/loader'

const basecampLogo = 'https://res.cloudinary.com/basejump/image/upload/v1580630789/basecamp-logo-mini.png';

class SessionForm extends React.Component {
  constructor(props) {
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
      this.setState({user, loading: false})
    }
  }

  componentWillReceiveProps(){
    this.setState({errors: {}})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({loading: true});
    this.props.processForm(this.state.user).
      then(res =>
        this.props.fetchUserProjects(res.user.id).
        then(subRes => this.props.fetchCompany(res.user.companyId))
      ).
      then(res => console.log("RES", res)).
      fail(res => this.handleErrors(res.responseJSON.errors))
  }

  handleErrors(err){
    this.setState({loading: false})
    let errors = {}
    err.forEach(error => {
      const key = error.split(' ')[0].toLowerCase()
      errors = Object.assign({}, errors, {[key]: error})
    })
    this.setState({errors})
  }

  signUpInputs(){

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
      <div>
        {
          this.state.loading ? <Loading styles={{
            position: 'absolute',
            top: '0%'
          }}/> : null
        }
        <div className='form-page'>
          <Link to='/'>
            <img src={basecampLogo} />
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
      </div>
    )
  }

}

export default SessionForm
