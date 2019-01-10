import React, { Component } from 'react';
import './App.css';
import Gazoo from './Gazoo';

class App extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Gazoo</h1>
            <p class="lead">An Html Editor React Component</p>
          </div>
        </div>
        <Gazoo />
      </div>
    );
  }
}

export default App;
