import React, { Component } from "react";
import { Avatar } from '@hife/catui';

interface Props {
  name: string;
}

export default class App extends Component<Props> {
  render() {
    return <div>this is {this.props.name}
      <div>
        <Avatar
          src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
          size='large'
        />
      </div></div>;
  }
}
