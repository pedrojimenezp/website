import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pedro Jimenezp</h2>
        </div>
        <p className="App-intro">
          <code>Full stack developer</code>
        </p>
      </div>
    );
  }
}

export default App;
