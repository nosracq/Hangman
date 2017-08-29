import React from 'react';
import Dash from './Dash.js';

// responsible for renderting the Dashes based on the progress of the Game
const Board = (props) => {

  let content;

  if (!props.solution) {
    content = <h3>Fetching a word...</h3>;
  }
  else {
    content = props.solution.map((letter, index) => {
      return <Dash key={`letter-${index}`} value={props.progress[index]}/>});
  }
  return (
    <div className="board">
      {content}
    </div>
  )
}


export default Board;
