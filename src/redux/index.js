import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const middleWare = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middleWare.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
)

export default store
