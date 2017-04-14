import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux';
import { Provider } from 'react-redux';

// For Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// For Mobx
// ReactDOM.render(
//   <App />
//   document.getElementById('root')
// );
