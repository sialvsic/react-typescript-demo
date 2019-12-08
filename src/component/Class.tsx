import React, { Component } from 'react'
import HelloButton from './Button';

interface Props {
}

interface State {
  number: number
}

class Class extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      number: 0
    }
    this.click = this.click.bind(this)
  }

  static defaultProps = {
  }

  click() {
    this.setState({
      number: this.state.number + 1
    })
  }


  render() {

    return (
      <div>
        <p>you have click {this.state.number}</p>
        <HelloButton name={'sialvsic'} click={this.click} />
      </div>
    )
  }
}

export default Class;