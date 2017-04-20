import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import rootReducer from './reducers'
import './index.css'

let store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
