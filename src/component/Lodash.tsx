import React, { Component } from 'react'
import _ from 'lodash'

export default class Lodash extends Component {
  render() {
    return (
      <div>
        {_.isArray([]) ? 'this is a array' : 'this is not array'}
      </div>
    )
  }
}
