import React, {Component} from 'react';

class Letter extends Component {

  constructor() {
    super();
    // perform the binding just once when the componenet is created
    // instead of each time it is rendered
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      disabled: false
    };
  }
  handleClick() {
    // disable the letter so it cannot be clicked again
    this.setState( { disabled: !this.state.disabled});

    let guess = this.props.value;
    // send the guessed letter to the parent to evaluate against the solution
    // and deccrement the guess counter
    this.props.evaluateGuess(guess);
  }
  render () {
    return (
      <button className="letter" onClick={this.handleClick} disabled={this.state.disabled}>
        {this.props.value}
      </button>
    )
  }

}

export default Letter;
