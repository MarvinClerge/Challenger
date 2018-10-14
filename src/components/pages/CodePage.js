import React, { Component } from 'react'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import ChallengeDescription from '../challenges/ChallengeDescription'

class CodePage extends Component {
  render(){
    return(
      <div className='home-page'>
        <Header small />
        <ChallengeDescription />
        <Footer />
      </div>
    )
  }
}

export default CodePage
