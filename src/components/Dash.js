import React, { Component } from 'react';

class Dash extends Component {

  constructor() {
    super();
    this.state = {
      letter: ' ',
    };
  }

  render() {
    return(
      <div className="dash">
        {this.state.letter}
      </div>
    )
  }
}

export default Dash;
