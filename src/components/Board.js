import React, { Component } from 'react';
import Dash from './Dash.js';

//TODO: I don't like how this class is implemented currently
//  Need to change so setting the state doesn't depend on
//  the parent calss, Game. Should the board own the progress
//  state or the Game. If the game owns it then it shouldn't
//  be part of the Board state.

// Maybe the Game should just evaluate the guess compared
// to the solution and pass it back to the board if it is correct
// so the board can update the progress.
class Board extends Component {
  constructor(props) {
    super(props);
    //console.log("Board constructor called");
    // The board in each game only has one solution so this will
    // not change after the board is first created
    let solutionLength = this.props.solution.length;
    this.state = {
      progress: Array(solutionLength).fill(null),
    }
  }

  renderDash(i) {
    return <Dash key={`letter-${i}`} value={this.state.progress[i]}/>
  }

  buildBoard() {
    return this.props.solution.map((letter, index) => {
      return this.renderDash(index);
    })
  }
  // update state when the props change from parent
  componentWillReceiveProps(nextProps) {
    this.setState({
      progress: nextProps.progress
    })
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
