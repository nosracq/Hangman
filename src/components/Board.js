import React, { Component } from 'react';
import Dash from './Dash.js';

class Board extends Component {

  constructor() {
    super();
    this.state = {
      solution: 'Board'.split(''),
    }
  }
  renderDash() {
    return <Dash />
  }

  buildBoard() {
    let spacesNeeded = this.state.solution;
    return spacesNeeded.map(this.renderDash);
  }

  render() {
    return (
      <div className="board">
        {this.buildBoard()}
      </div>
    )
  }
}

export default Board;
