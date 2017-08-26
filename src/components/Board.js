import React, { Component } from 'react';
import Dash from './Dash.js';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: Array(this.props.solution.length).fill(null),
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
