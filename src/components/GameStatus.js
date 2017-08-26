import React, { Component } from 'react';

class GameStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessesRemaining: this.props.guessesRemaining,
    }
  }
  render() {
    return (
      <div><h2>GuessesRemaining: {this.state.guessesRemaining}</h2></div>
    )
  }
}

export default GameStatus;
