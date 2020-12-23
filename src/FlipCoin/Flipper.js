import React, { Component } from "react";
import Coin from "./Coin";

class Flipper extends Component {
  static defaultProps = {
    coinHas: ["heads", "tails"],
  };
  state = {
    stCoin: ["heads"],
    flips: 0,
    heads: 0,
    tails: 0,
  };
  flipCoin = () => {
    let sideRnd = Math.floor(Math.random() * this.props.coinHas.length);
    let side = this.props.coinHas[sideRnd];
    this.setState((curState) => {
      return {
        stCoin: side,
        flips: curState.flips + 1,
        heads: curState.heads + (side === "heads" ? 1 : 0),
        tails: curState.tails + (side === "tails" ? 1 : 0),
      };
    });
  };
  handleFlip = () => {
    this.flipCoin();
  };
  render() {
    return (
      <section>
        <Coin
          coin={this.state.stCoin}
          flips={this.state.flips}
          heads={this.state.heads}
          tails={this.state.tails}
        />
        <button onClick={this.handleFlip}>Flip!</button>
        <h3>
          Van {this.state.flips} flips, {this.state.heads} Caras y{" "}
          {this.state.tails} Sellos
        </h3>
      </section>
    );
  }
}

export default Flipper;
