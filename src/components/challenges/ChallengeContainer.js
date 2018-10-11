import React, { Component } from 'react'
import ChallengeCard from './ChallengeCard'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { challengesFetch } from '../../actions'

import { Link } from 'react-router-dom'

import './challenge.css'

class ChallengeContainer extends Component {

  componentDidMount(){
    this.props.getChallenges()
  }

  renderIntroduction = () => {
    if (this.props.preview) {
      return <p>Check out some Challenges</p>
    }
  }

  renderChallenges = () => {
    let challenges = []
    if (this.props.preview) {
      challenges = this.props.challenges.slice(0,5)
    } else {
      challenges = this.props.challenges
    }

    return challenges.map((challenge, index) => {
      return (
        <ChallengeCard key={index} {...challenge} index={index}/>
      )
    })
  }

  renderButton = () => {
    if (this.props.preview) {
      return (
        <Link to='/challenges'>
          <button className='challenge-button'>
            VIEW ALL CHALLENGES
          </button>
        </Link>
      )
    }
  }

  render(){
    return(
      <div className='challenge'>
        {this.renderIntroduction()}
        {this.renderChallenges()}
        {this.renderButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    challenges: state.challenges
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getChallenges: challengesFetch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
