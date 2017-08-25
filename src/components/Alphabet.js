import React, { Component } from 'react';
import Letter from './Letter.js';

class Alphabet extends Component {

  renderLetter(char) {
    return <Letter value={char}/>;
  }

  render() {
    return (
      <div className="alphabet">
        {this.renderLetter('A')}
        {this.renderLetter('B')}
        {this.renderLetter('C')}
        {this.renderLetter('D')}
        {this.renderLetter('E')}
        {this.renderLetter('F')}
        {this.renderLetter('G')}
        {this.renderLetter('H')}
        {this.renderLetter('I')}
        {this.renderLetter('J')}
        {this.renderLetter('K')}
        {this.renderLetter('L')}
        {this.renderLetter('M')}
        {this.renderLetter('N')}
        {this.renderLetter('O')}
        {this.renderLetter('P')}
        {this.renderLetter('Q')}
        {this.renderLetter('R')}
        {this.renderLetter('S')}
        {this.renderLetter('T')}
        {this.renderLetter('U')}
        {this.renderLetter('V')}
        {this.renderLetter('W')}
        {this.renderLetter('X')}
        {this.renderLetter('Y')}
        {this.renderLetter('Z')}
      </div>
    )
  }
}

export default Alphabet;
