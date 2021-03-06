import React, { Component } from "react";
import { Avatar } from '@hife/catui';
import Intl from './Intl';
import Class from './Class';
import Para from './Para';
import CountHook from "./CountHook";
import Loading from "./Loading";
import Time from "./Time";
import Lodash from "./Lodash";

interface Props {
  name: string;
}

interface State {
  loading: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 1000);
  }

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
        <Class />
        <Para loading={this.state.loading} />
        <CountHook />
        <Loading />
        <Time />
        <Lodash />
      </div>
    </div>;
  }
}
