import React, { Component } from 'react'
import WithLoading from './WithLoading';

class Para extends Component {
  render() {
    return (
      <div>
        this is a section text
      </div>
    )
  }
}


export default WithLoading(Para)