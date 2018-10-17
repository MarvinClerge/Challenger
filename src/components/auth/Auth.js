import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loginFetch, signupFetch } from '../../actions'

import './auth.css'

class Auth extends Component {
  state = {
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
    signup: true
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.signup) {
      this.props.signup({
        name: this.state.username,
        emailAddress: this.state.emailAddress,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation
      })
    } else {
      this.props.login({
        emailAddress: this.state.emailAddress,
        password: this.state.password
      })
    }
  }

  onClick = (event) => {
    this.setState({
      signup: !this.state.signup
    })
  }

  renderSignup = () => {
    if (this.state.signup) {

      return(
        <div className='signup'>
          <h2>Create an Account</h2>

          <form className='auth-form' onSubmit={this.onSubmit}>
            <div>
              <h3>Username</h3>
              <input type='text' name='username'
                value={this.state.username} onChange={this.onChange} />
            </div>

            <div>
              <h3>Email Address</h3>
              <input type='text' name='emailAddress'
                value={this.state.emailAddress} onChange={this.onChange} />
            </div>

            <div>
              <h3>Password</h3>
              <input type='password' name='password'
                value={this.state.password} onChange={this.onChange} />
            </div>

            <div>
              <h3>Confirm Password</h3>
              <input type='password' name='passwordConfirmation'
                value={this.state.passwordConfirmation} onChange={this.onChange} />
            </div>

            <button type='submit'>Create Account</button>
          </form>
        </div>
      ) // return
    } // if state.signup
  }

  renderLogin = () => {
    if (!this.state.signup) {
      return(
        <div className='signup'>
          <h2>Login</h2>

          <form className='auth-form' onSubmit={this.onSubmit}>
            <div>
              <h3>Email Address:</h3>
              <input type='text' name='emailAddress'
                value={this.state.emailAddress} onChange={this.onChange} />
            </div>

            <div>
              <h3>Password:</h3>
              <input type='password' name='password'
                value={this.state.password} onChange={this.onChange} />
            </div>

            <button type='submit'>Login</button>
          </form>
        </div>
      ) // return
    } // if !state.signup
  }

  render(){
    return(
      <div className='auth'>
        {this.renderSignup()}
        {this.renderLogin()}

        <p onClick={this.onClick}>
          or {this.state.signup ? "login" : "signup"}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: loginFetch,
    signup: signupFetch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
