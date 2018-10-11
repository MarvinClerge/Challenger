import React, { Component } from 'react'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import ChallengeContainer from '../challenges/ChallengeContainer'

class HomePage extends Component {
  render(){
    return(
      <div className='home-page'>
        <Header />
        <ChallengeContainer preview />
        <Footer />
      </div>
    )
  }
}

export default HomePage
