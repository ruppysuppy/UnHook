import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';

import timeReducer from './store/reducers/timeReducer'

import App from './App';

const composeEnhancers = (
  (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose
)

const store = createStore(timeReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
