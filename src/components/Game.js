import React, { Component } from 'react';
import Alphabet from './Alphabet.js';
import Board from './Board.js'

class Game extends Component {
  /*constructor() {
    super();
  }*/
  render() {
    return(
      <div>
        <Board />
        <Alphabet />
      </div>
    )
  }

}

export default Game;
