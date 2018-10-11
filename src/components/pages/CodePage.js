import React, { Component } from 'react'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'

class CodePage extends Component {
  render(){
    return(
      <div className='home-page'>
        <Header small />

        <Footer />
      </div>
    )
  }
}

export default CodePage
