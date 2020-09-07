import React, { Component } from "react";
class State_lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    console.log("mounted");
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("unmounted");
  }
  tick() {
    this.setState({
      date: new Date(),
    });
    console.log("TICK");
  }
  state = {};
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default State_lifecycle;
