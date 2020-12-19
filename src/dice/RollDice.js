import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      roll1: "one",
      roll2: "one",
      rolling: false,
    };
  }
  rollDice = () => {
    let die1 = Math.floor(Math.random() * this.props.sides.length);
    let die2 = Math.floor(Math.random() * this.props.sides.length);
    // console.log(die1);
    // console.log(this.props.sides[die1]);
    this.setState({
      roll1: this.props.sides[die1],
      roll2: this.props.sides[die2],
      rolling: true,
    });
    // wait one sec
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }; 

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.roll1} rolling={this.state.rolling} />
          <Die face={this.state.roll2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
