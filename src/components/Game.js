import React, { Component } from 'react'
import Intro from './Intro.js'
import GameStatus from './GameStatus.js'
import Board from './Board.js'
import Alphabet from './Alphabet.js'
import Buttons from './Buttons.js'
import apiConfig from '../config/.apiConfig';
import $ from 'jquery'
/*
  The Game component is responsible for managing the state of the game
*/
class Game extends Component {
  constructor() {
    super();
    // put the code for the api call here
  //  this.getWord = this.getWord.bind(this);
    this.state = {
      //solution: 'PUZZLE'.split(''),
      solution: null,
      progress: [],
      playerWon: false,
      gameOver: false,
      guessesRemaining: 8,
    }
  }

  componentDidMount() {

    const baseURL = 'https://wordsapiv1.p.mashape.com/words/';
    const query = '?random=true';

    // if i add redux then need to move this out of the component and into
    // the async actions

    const setState = this.setState.bind(this);
    $.ajax({
        url: baseURL + query,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
          console.log("API call successful");
          console.log("Word: " + res.word);
          //solution = res.word.split('');
          setState({
            solution: res.word.toUpperCase().split(''),
            progress: Array(res.word.length).fill(null),
          });
        },
        error: function(err) {
          console.log(err);
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", apiConfig.key);
        }
      });
    //console.log('Solution received: ' + solution);
    /*this.setState({
      solution: solution,
      progress: Array(solution.length).fill(null),
    })*/
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
        <Buttons />
      </div>
    )
  }

}

export default Game;
