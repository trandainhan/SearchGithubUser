import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from '../App'
import SearchReducer from '../redux/reducers'

const loggerMiddleware = createLogger()

const middleWare = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middleWare.push(loggerMiddleware);
}

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  SearchReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleWare))
)

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
