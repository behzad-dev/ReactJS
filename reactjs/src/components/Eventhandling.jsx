import React, { Component } from "react";

class Eventhandling extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleon: true, isToggleon2: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({ isToggleon: !state.isToggleon }));
    console.log(this);
  }
  handleClickWithArrow() {
    this.setState((state) => ({ isToggleon2: !state.isToggleon2 }));
    console.log(this);
  }
  deleteRow() {}
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleon ? "ON" : "OFF"}
        </button>
        <button onClick={() => this.handleClickWithArrow()}>
          {this.state.isToggleon2 ? "My second ON" : "My Second OFF"}
        </button>

        <hr></hr>
        {/* two ways to send data,arrow functions and Function.prototype.bind */}
        <button onClick={(e) => this.deleteRow("id", e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, "id")}>Delete Row</button>
      </div>
    );
  }
}

export default Eventhandling;
