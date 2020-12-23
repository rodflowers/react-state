import React, { Component } from "react";

class Coin extends Component {
  COIN_IMG_URL = "https://tinyurl.com/react-coin-";
  render() {
    return (
      <div>
        <h1>{`${this.COIN_IMG_URL}${this.props.coin}-jpg`}</h1>
        {/* <img src={`${this.COIN_IMG_URL}${this.props.coin}-jpg`} /> */}
      </div>
    );
  }
}

export default Coin;
