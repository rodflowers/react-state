import React, { Component } from "react";

class NumberSeven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNumberSeven: false,
      ranNumber: 1,
    };
  }
  randNumber = (e) => {
    let ran = Math.floor(Math.random() * 10);
    this.setState({ ranNumber: ran });
    if (ran === 7) {
      this.setState({ isNumberSeven: true });
    }
  };
  render() {
    return (
      <div>
        <h1>Number is: {this.state.ranNumber}</h1>
        {this.state.ranNumber === 7 ? (
          <h2>WINNER!!</h2>
        ) : (
          <button onClick={this.randNumber}>Random Number</button>
        )}
      </div>
    );
  }
}

export default NumberSeven;
