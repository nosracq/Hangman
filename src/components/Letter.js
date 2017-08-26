import React, {Component} from 'react';

class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  handleClick() {
    // disable the letter so it cannot be clicked again
    this.setState( { disabled: !this.state.disabled});

    let guess = this.props.value;
    // send the guessed letter to the parent to evaluate against the solution
    this.props.evaluateGuess(guess);
  }
  render () {
    return (
      <button className="letter" onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>
        {this.props.value}
      </button>
    )
  }

}

export default Letter;
