import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { challengeFetch } from '../../actions'

// Import components to the placed in DOM
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import ChallengeDescription from '../challenges/ChallengeDescription'
import Code from '../code/Code'

class CodePage extends Component {
  componentDidMount(){
    let challengeId = this.props.routerProps.match.params.id
    this.props.getChallenge(challengeId)
  }

  render(){
    const challengeId = parseInt(this.props.routerProps.match.params.id)

    if (this.props.challenge) {
      return(
        <div className='home-page'>
          <Header small />
          <ChallengeDescription
            challenge={this.props.challenge} challengeId={challengeId} />
          <Code
            challenge={this.props.challenge} challengeId={challengeId} />
          <Footer />
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


export default connect(mapStateToProps, mapDispatchToProps)(CodePage);
