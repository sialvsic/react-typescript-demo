import React, { Component } from "react";

interface Props {
  name: string;
}

export default class App extends Component<Props> {
  render() {
    return <div>this is {this.props.name}</div>;
  }
}
