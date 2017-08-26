import React, { Component } from 'react';
import Intro from './Intro.js';
import GameStatus from './GameStatus.js';
import Board from './Board.js';
import Alphabet from './Alphabet.js';
/*
  The Game component is the parent to the Board and Alphabet components
*/
class Game extends Component {
  constructor() {
    super();
    //TODO: need to keep track of number of spaces in solution, to compare
    //  woth the number of successful guesses when determining if the player has won
    this.state = {
      solution: 'PUZZLE'.split(''),
      //TODO: figure out how to allocate the same sized array as this.state.solution
      progress: Array(20).fill(null),
      playerWon: false,
      guessesRemaining: 8,
    }
  }
  //TODO: need to check if the player has won or if the chances left are 0

  //TODO: update guessesRemaining when a letter is clicked

  evaluateGuess = (letter) => {
    /*
        1. when a player clicks a letter, pass the value to the parent Game
        2. Have the Game evaluate the guess to see if the letter occurs in the solution
        3. If the letter is in the solution then update the state of the board
            < Updating the state of the board will re-render the dash with the matching letter>
    */
    const progress = this.state.progress.slice();
    let i = this.state.solution.indexOf(letter, 0);

    while(i >= 0) {
      progress[i] = letter;
      i = this.state.solution.indexOf(letter, i + 1);
    }
    this.setState({
      progress: progress,
    });
  }
  render() {
    return(
      <div>
        <Intro />
        <GameStatus
          guessesRemaining={this.state.guessesRemaining}/>
        <Board
          solution={this.state.solution}
          progress={this.state.progress}/>

        <Alphabet
          evaluateGuess={this.evaluateGuess}/>
      </div>
    )
  }

}

export default Game;
