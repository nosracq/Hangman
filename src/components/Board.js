import React, { Component } from 'react';
import Dash from './Dash.js';

class Board extends Component {

  renderDash(char){
    return <Dash value={char}/>;
  }

  render() {
    return(
      <div>
        {this.renderDash('B')}
        {this.renderDash('O')}
        {this.renderDash('A')}
        {this.renderDash('R')}
        {this.renderDash('D')}
      </div>
    )
  }
}

export default Board;
