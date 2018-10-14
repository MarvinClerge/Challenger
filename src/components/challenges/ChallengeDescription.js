import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChallengeDescription extends Component {
  componentDidMount(){
    // Fetch challenge
  }

  render(){
    return(
      <div className='challenge-description'>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getChallenge: challengeFetch
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ChallengeDescription);
