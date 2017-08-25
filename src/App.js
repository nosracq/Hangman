import React, { Component } from 'react';
//import logo from './logo.svg';
//import Letter from './components/Letter.js';
import Alphabet from './components/Alphabet.js';
import Board from './components/Board.js';
import './css/letter.css';
import './css/alphabet.css';
import './css/dash.css';
import './css/board.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          {/*}<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
          <div className="board">
            <Board />
          </div>
          <div className="alphabet">
            <Alphabet />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
