import React, { Component } from 'react';
import Intro from './Intro.js';
import GameStatus from './GameStatus.js';
import Board from './Board.js';
import Alphabet from './Alphabet.js';
/*
  The Game component is responsible for managing the state of the game
*/
class Game extends Component {
  constructor() {
    super();

    this.state = {
      solution: 'PUZZLE'.split(''),
      progress: [],
      playerWon: false,
      gameOver: false,
      guessesRemaining: 8,
    }
  }
  //TODO: need to check if the player has won or if the chances left are 0
  componentWillMount() {
    this.setState({
      progress: Array(this.state.solution.length).fill(null),
    })
   }
  checkForWinner() {
    let solution = this.state.solution.join('');
    let progress = this.state.progress.join('');
    if(solution === progress) {
      this.setState({
        playerWon: true,
      })
    }
  }
  evaluateGuess = (letter) => {
    /*
        1. when a player clicks a letter, pass the value to the parent Game
        2. decrement the guessesRemaining counter
        3. Have the Game evaluate the guess to see if the letter occurs in the solution
        4. If the letter is in the solution then update the state of the board
            < Updating the state of the board will re-render the dash with the matching letter>
    */
    // get a shallow copy of the progress in state
    const progress = this.state.progress.slice();
    const solution = this.state.solution.slice();
    let i = solution.indexOf(letter, 0);
    let found = false;
    let remaining = 0;
    let playerWon;
    let gameOver;

    while(i >= 0) {
      progress[i] = letter;
      i = solution.indexOf(letter, i + 1);
      found = true;
    }

    remaining = found ? this.state.guessesRemaining : this.state.guessesRemaining - 1;
    playerWon = progress.join('') === solution.join('') ? true : false;
    gameOver = playerWon || remaining === 0 ? true : false;

    this.setState({
      progress: progress,
      guessesRemaining: remaining,
      playerWon: playerWon,
      gameOver: gameOver,
    })
  }
  render() {
    console.log("Rendering Game...");
    // Check if a player has won
    return(
      <div>
        <Intro />

        <GameStatus
          guessesRemaining={this.state.guessesRemaining}
          playerWon={this.state.playerWon}
          gameOver={this.state.gameOver}/>

        <Board
          solution={this.state.solution}
          progress={this.state.progress}/>

        <Alphabet
          evaluateGuess={this.evaluateGuess}
          gameOver={this.state.gameOver}/>
      </div>
    )
  }

}

export default Game;
