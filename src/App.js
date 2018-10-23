import React, { Component } from 'react';
import court from './suns_court.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={court} className="App-court" alt="court" />
          <a
            className="App-link"
            href="https://nba.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ON-OFF
          </a>
        </header>
      </div>
    );
  }
}

export default App;
