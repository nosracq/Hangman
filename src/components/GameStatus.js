import React from 'react';

// responsible for displaying the GameStatus depending on the state of the game
const GameStatus = (props) => {
  let display;

  if (props.playerWon) {
    display = <h2>You Won!</h2>;
  }
  else if (props.guessesRemaining <= 0) {
    display = <h2>Game Over! Try Again</h2>
  }
  else {
    display = <h2>GuessesRemaining: {props.guessesRemaining}</h2>
  }
  return (
    <div>{display}</div>
  )
}

export default GameStatus;
