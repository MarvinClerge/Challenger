import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { challengeFetch } from '../../actions'

class ChallengeDescription extends Component {
  componentDidMount(){
    let challengeId = this.props.routerProps.match.params.id
    this.props.getChallenge(challengeId)
  }

  render(){
    if (this.props.challenge) {
      let challenge = this.props.challenge
      let challengeId = this.props.routerProps.match.params.id

      return(
        <div className='challenge-description'>
          <div className='challenge-description-header'>
            <div>{challengeId}</div>
            <div>{challenge.name}</div>
          </div>

          <div className='challenge-description-content'>
            {challenge.description}
          </div>
        </div>
      )

    } else {
      return <div></div>
    }


  }
}

const mapStateToProps = state => {
  return {
    challenge: state.challenge
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getChallenge: challengeFetch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeDescription);
