import React from 'react'
import socialMediaData from './socialMediaData'
import SocialMediaCard from './socialMediaCard'
import './socialMedia.css'

const SocialMediaContainer = props => {
  function mapData(){
    return socialMediaData.map((media, index) => {
      return <SocialMediaCard key={index} {...media} />
    })
  }

  return(
    <div className='social-media-container'>
      {mapData()}
    </div>
  )
}

export default SocialMediaContainer;
