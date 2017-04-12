import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './App.scss';
import React from 'react';
// import DevTools from 'mobx-react-devtools';
import Search from './redux/containers/Search';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>React Playground</h1>
      <h2>ES6 - React - Redux - Mobx - Recompose</h2>
      <h2>Webpack2 - Enzyme - Mocha - SinonChai - Karma </h2>
    </div>
    <div className="container">
      <h1 className="title">Github User Seaching...</h1>
      <Search />
    </div>
  </div>
)

export default App;
