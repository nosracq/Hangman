import React from 'react';

//class Dash extends Component {
const Dash = (props) => {
  /*constructor() {
    super();
    this.state = {
      letter: '',
    };
  }*/

  // updates the letter of the current dash when a successful guess is made
  /*componentWillReceiveProps(nextProps) {
    this.setState({
      letter: nextProps.value
    })
  }*/

  //render() {
    //TODO: need to remove border-bottom if the letter is a space
    return(
      <div className="dash">
        {props.value}
      </div>
    )
  //}
}

export default Dash;
