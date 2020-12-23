import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch",
    ],
  };
  // State region
  state = {
    icons: [""],
  };
  //   addIcon = () => {
  //     let idx = Math.floor(Math.random() * this.props.options.length);
  //     let newIcon = this.props.options[idx];
  //     let icons = this.state.icons;
  //     icons.push(newIcon);
  //     this.state({ icons: icons });
  //   };
  addIcon = () => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    this.setState({ icons: [...this.state.icons, newIcon] });
  };
  render() {
    const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;
