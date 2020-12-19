import React, { Component } from "react";

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { cliked: false };
    //this.handleClick = this.handleClick.bind(this);
  }
//   handleClick(e) {
//       this.setState({ cliked: true });
//   }

  // No need to bidn this
  handleClick = (e) => {
    this.setState({ cliked: true });
  }
  render() {
    return (
      <div>
          <h1>{this.state.cliked ? 'Clicked!!!' : 'Not Clicked'}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default BrokenClick;
