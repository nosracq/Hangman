import React, {Component} from 'react';

class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  handleClick() {
    this.setState( { disabled: !this.state.disabled});
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
