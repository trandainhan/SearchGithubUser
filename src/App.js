import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import './App.scss';
import React, { Component } from 'react';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <h1 className="title">Search github user</h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
