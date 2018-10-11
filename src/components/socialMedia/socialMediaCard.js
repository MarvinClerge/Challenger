import React from 'react'

const SocialMediaCard = props => {
  return(
    <div className='social-media-card'>
      <a href={props.link}>
        <img src={require(`./${props.image}`)} alt={props.name} />
      </a>
    </div>
  )
}

export default SocialMediaCard
