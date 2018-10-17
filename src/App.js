import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { currentUserFetch } from './actions'


import './App.css';

import HomePage from './components/pages/HomePage'
import ChallengePage from './components/pages/ChallengePage'
import CodePage from './components/pages/CodePage'
import AboutPage from './components/pages/AboutPage'
import AuthPage from './components/pages/AuthPage'
// import TechnologyPage from './components/pages/TechnologyPage'


class App extends Component {
  // componentDidMount(){
  //   const token = localStorage.getItem('token')
  //   this.props.currentUser()
  // }

  render() {
    return (
      <div className='app'>
        <Route path='/' exact component={HomePage} />
        <Route path='/challenges' exact component={ChallengePage} />
        <Route path='/challenges/:id' exact render={routerProps =>
          <CodePage routerProps={routerProps} />
        }/>
        <Route path='/about' exact component={AboutPage} />
        <Route path='/account' exact component={AuthPage} />
        {/* <Route path='/technology' exact component={TechnologyPage} /> */}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     currentUser: currentUserFetch
//   }, dispatch)
// }

export default App;
// export default connect(null, mapDispatchToProps)(App);
