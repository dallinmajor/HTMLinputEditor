import React, { Component } from 'react';
import './App.css';
import Gazoo from './Gazoo';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Gazoo</h1>
            <p className="lead">An Html Editor React Component</p>
          </div>
        </div>
        <Gazoo />
      </div>
    );
  }
}

export default App;
