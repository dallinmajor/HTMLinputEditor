import React, { Component } from 'react';
import './App.css';
import Gazoo from './Gazoo';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">HTML editor + sanitizer</h1>
            <p className="lead">Store line breaks in your database.</p>
          </div>
        </div>
        <Gazoo />
      </div>
    );
  }
}

export default App;
