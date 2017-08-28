import React from 'react';
import Dash from './Dash.js';

// responsible for renderting the Dashes based on the progress of the Game
const Board = (props) => {

  return (
    <div className="board">
      {props.solution.map((letter, index) => {
        return <Dash key={`letter-${index}`} value={props.progress[index]}/>})}
    </div>
  )
}


export default Board;
