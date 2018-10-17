import React, { Component } from 'react'

class ChallengeDescription extends Component {

  render(){
    if (this.props.challenge) {
      return(
        <div className='challenge-description'>
          <div className='challenge-description-header'>
            <div>{this.props.challengeId}</div>
            <div>{this.props.challenge.name}</div>
          </div>

          <div className='challenge-description-content'>
            {this.props.challenge.description}
          </div>
        </div>
      )

    } else {
      return <div></div>
    }
  }
}

export default ChallengeDescription;
