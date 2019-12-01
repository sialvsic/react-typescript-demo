import React, { Component } from "react";
import { Avatar } from '@hife/catui';
import Intl from './Intl';

interface Props {
  name: string;
}

export default class App extends Component<Props> {
  render() {
    return <div>
      <p>
        this is {this.props.name}
      </p>
      <div>
        <Avatar
          src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
          size='large'
        />
        <Intl />
      </div>
    </div>;
  }
}
