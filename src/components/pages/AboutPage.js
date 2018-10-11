import React, { Component } from 'react'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import Author from '../authors/Author'

class HomePage extends Component {
  render(){
    return(
      <div className='home-page'>
        <Header small subtitle='about'/>
        <Author />
        <Footer />
      </div>
    )
  }
}

export default HomePage
