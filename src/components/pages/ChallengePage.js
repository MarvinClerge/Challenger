import React, { Component } from 'react'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import ChallengeContainer from '../challenges/ChallengeContainer'

class ChallengePage extends Component {
  render(){
    return(
      <div className='home-page'>
        <Header small subtitle='challenges'/>
        <ChallengeContainer />
        <Footer />
      </div>
    )
  }
}

export default ChallengePage
