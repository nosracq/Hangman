import React, {Component} from 'react';

class Letter extends Component {

  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  handleClick() {
    this.setState( { disabled: !this.state.disabled});

    /*TODO*/
    /* check if the clicked letter is in the solution, and if so then update this.state.letter for the Dash component*/
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
