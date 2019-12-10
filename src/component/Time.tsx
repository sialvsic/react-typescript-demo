import React, { Component } from 'react'
import moment from 'moment';

const formatStr = 'MMM DD, YYYY';
export default class Time extends Component {
  render() {

    const initStart = moment(moment().subtract(30, 'day'), formatStr).format();
    const init = moment(moment().subtract(30, 'day'), formatStr).format();
    const defStartDate = moment().subtract(30, 'day').format(formatStr)
    const Date = moment('2018-01-01')
    console.log(initStart);
    console.log(defStartDate);
    console.log(Date);
    console.log(moment('2018-01-01'));
    return (
      <div>
        {'initStart'}
      </div>
    )
  }
}
