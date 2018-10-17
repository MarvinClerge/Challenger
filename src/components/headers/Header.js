import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout, currentUserFetch } from '../../actions'

import './header.css'

const Header = props => {

  function renderIntroduction(){
    // With no small property. Render introduction text
    if (!props.small) {
      return(
        <div className='header-introduction'>
          <p>
            Welcome to JavaScript Challenger here you can
            test your JavaScript skill using our in browser editor.
          </p>
          <p>
            Do you have what it takes to clear them all?
          </p>
        </div>
      )
    }
  }

  // Render given subtitle
  function renderSubtitle(){
    if (props.subtitle) {
      return(
        <p className='header-subtitle'>
          {props.subtitle}
        </p>
      )
    }
  }


  function renderLogin(){
    if (!props.small && props.user) {
      return(
        <Link to='/' className='header-account' onClick={(event)=>props.logout()}>
          logout
        </Link>
      )
    } else if (!props.small) {
      return(
        <Link to='/account' className='header-account'>
          signup
        </Link>
      )
    }
  }

  const token = localStorage.getItem('token')
  if (!!token && !props.user) {
    props.currentUser(token)
  }

  return(
    <div className='header'>
      {renderLogin()}

      <Link to='/'>
        <h3>
          <p className='header-title'>JavaScript</p>
          <p className='header-title'>Challenger</p>
          {renderSubtitle()}
        </h3>
      </Link>

      {renderIntroduction()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout: logout,
    currentUser: currentUserFetch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
