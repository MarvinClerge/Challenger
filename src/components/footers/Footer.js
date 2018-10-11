import React from 'react'

import footerData from './footerData'
import './footer.css'

const Footer = props => {
  function mapData(){
    return footerData.map((item, index) => {
      return (
        <li key={index} className='footer-item'>
          <a href={item.link}>
            {item.text}
          </a>
        </li>
      )
    })
  }
  return(
    <div className='footer'>
      <ul className='footer-list'>
        {mapData()}
      </ul>
    </div>
  )
}

export default Footer;
