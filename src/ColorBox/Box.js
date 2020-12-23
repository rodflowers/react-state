import React, { Component } from "react";

class Box extends Component {
  state = {
    color: "purple",
  };
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
