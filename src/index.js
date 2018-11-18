import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

// React-Router-Dom is used to manage application navigation
import { BrowserRouter as Router } from 'react-router-dom'

// REDUX is used to manage application state and data
import { createStore, applyMiddleware } from 'redux' // store and middleware
import rootReducer from './rootReducer' // Collection of reducers
import thunk from 'redux-thunk' // Async data collection
import { Provider } from 'react-redux' // State management

// Hold data, modify based on reducers, async actions w/ thunk
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
