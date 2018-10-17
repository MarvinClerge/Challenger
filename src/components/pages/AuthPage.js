import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import Auth from '../auth/Auth'

class AuthPage extends Component {

  render(){
    if (this.props.user) {
      return <Redirect to="/" />
    } else {
      return(
        <div className='home-page'>
          <Header small subtitle='about'/>
          <Auth />
          <Footer />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(AuthPage)
