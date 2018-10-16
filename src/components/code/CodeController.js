import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userChallengeFetch, createUserChallengeFetch } from '../../actions'
import Interpreter from 'js-interpreter'

class CodeController extends Component {
  state = {
    passed: false
  }

  componentDidMount(){
    if (this.props.user) {
      let userId = this.props.user.id
      let challengeId = this.props.routerProps.match.params.id

      this.props.getUserChallenge(userId, challengeId)
    }
  }

  onClick = (event) => {
    // Create a new instance of the interpreter with current code.
    const myInterpreter = new Interpreter(this.props.code);

    try {
      // Run the interpreter and check if return value with test
      myInterpreter.run()
      const value = myInterpreter.value.data
      const test = this.props.challenge.test

      if (value === test) {
        // If there is no account. Tell user to log to save information.
        if (this.props.user) {
          alert("Test Passed")

          // Create a new instance in the database if one does not exist.
          if (!this.props.userChallenge) {
            let userId = this.props.user.id
            let challengeId = this.props.routerProps.match.params.id

            this.props.createUserChallenge(userId, challengeId)
          }

        } else {
          alert("Test Passed\nPlease log in to save results")
        }

        this.setState({
          passed: true
        })
      }

    } catch (error) {
      alert(error.toString())
    }
  }

  renderTrophy = () => {
    if (this.state.passed) {
      return <img
        src={require('../challenges/trophy.png')} alt='trophy'/>
    } else {
      return <img
        src={require('../challenges/dull_trophy.png')} alt='grey trophy' />
    }
  }

  render(){
    if (!this.state.passed && this.props.userChallenge) {
      this.setState({
        passed: true
      })
    }

    return(
      <div className='code-controller'>
        <button onClick={this.onClick} className='test-button'>
          Test Code
        </button>

        <button className='like-button'>
          {this.renderTrophy()}
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.user,
    challenge: state.challenge,
    userChallenge: state.userChallenge
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUserChallenge: userChallengeFetch,
    createUserChallenge: createUserChallengeFetch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeController);
