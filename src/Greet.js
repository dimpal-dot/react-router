import React, { Component } from "react";
import { render } from "react-dom";

class Greet extends Component {
  state = {
    username: ""
  };
  constructor(props) {
    super(props);
    this.setState({
      username: props.match.params.username
    });
  }

  render() {
    return <h1>Hello from Greet!</h1>;
  }
}

export default Greet;
