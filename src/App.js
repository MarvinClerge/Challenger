import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './App.css';

import HomePage from './components/pages/HomePage'
import ChallengePage from './components/pages/ChallengePage'
import CodePage from './components/pages/CodePage'
import AboutPage from './components/pages/AboutPage'
import AuthPage from './components/pages/AuthPage'


class App extends Component {

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
      </div>
    )
  }
}

export default App;
