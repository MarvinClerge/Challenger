import React from 'react'

import SocialMediaContainer from '../socialMedia/SocialMediaContainer'
import './author.css'

const Author = props => {
  return(
    <div className='author'>
      <div className='author-intro'>
        <img src={require('./marvin.png')} alt='Marvin Clerge' />
        <h3>Marvin Clerge</h3>
      </div>

      <div className='author-media'>
        <SocialMediaContainer />
      </div>

      <div className='author-content'>
        <p>
          A Full Stack Web Developer.
          I use React for the frontend and Ruby on Rails for the backend.
        </p>

        <p>
          I also build computers, create 3D models with Blender,
          and write scripts in Python for data management and extraction.
        </p>

        <p>
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
        </p>

        <p>
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
        </p>

        <p>
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
          Flavor text of who I am and what I do.
        </p>
      </div>
    </div>
  )
}

export default Author;
