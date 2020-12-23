import React, { Component } from "react";

class ScoreKeeper extends Component {
  state = { score: 0 };

  singleKill = () => {
    // Not a good idea to update the state
    // if it relies on existing state values
    this.setState({ score: this.state.score + 1 });
  };

  singleKill2 = () => {
    this.setState({ score: this.state.score + 1 });
    this.setState({ score: this.state.score + 1 });
    this.setState({ score: this.state.score + 1 });
  };

  singleKill3 = () => {
    this.setState((st) => {
      return { score: st.score + 1 };
    });
    this.setState((st) => {
      return { score: st.score + 1 };
    });
    this.setState((st) => {
      return { score: st.score + 1 };
    });
  };
  // Best pattern setState
  incrementState = (curState) => {
    return { score: curState.score + 1 };
  };
  singleKill4 = () => {
    this.setState(this.incrementState);
    this.setState(this.incrementState);
    this.setState(this.incrementState);
  };
  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.singleKill4}>Triple Kill</button>
      </div>
    );
  }
}

export default ScoreKeeper;
