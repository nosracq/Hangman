import React, { Component } from 'react';

class Dash extends Component {

  render() {
    return(
      <div className="dash">
        {this.props.value}
      </div>
    )
  }
}

export default Dash;
