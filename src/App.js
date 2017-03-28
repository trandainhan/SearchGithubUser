import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './App.scss';
import React from 'react';
import DevTools from 'mobx-react-devtools';
import Search from './Search';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Welcome to React</h2>
    </div>
    <div className="container">
      <h1 className="title">Search github user</h1>
      <Search />
    </div>
    <DevTools />
  </div>
)

export default App;
