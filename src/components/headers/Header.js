import React from 'react'
import { Link } from 'react-router-dom'

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

  return(
    <div className='header'>
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

export default Header;
