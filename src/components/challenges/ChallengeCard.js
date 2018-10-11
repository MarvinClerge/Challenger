import React from 'react'
import { Link } from 'react-router-dom'

import './challenge.css'

const ChallengeCard = props => {
  return(
    <div className='challenge-card'>

      <div className='challenge-card-index'>
        <h4>{props.index+1}</h4>
      </div>

      <div className='challenge-card-content'>
        <h3>
          <Link to={`/challenges/${props.index+1}`}>
            {props.name}
          </Link>
        </h3>

        <p>{props.description}</p>

        <div className='challenge-card-stats'>
          <div className='challenge-card-stat'>
            <img src={require('./trophy.png')} alt='trophy' />
            <p>{props.user_challenges}</p>
          </div>

          <div className='challenge-card-stat'>
            <img src={require('./heart.png')} alt='heart' />
            <p>{props.likes}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ChallengeCard;
