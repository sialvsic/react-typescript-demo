import React, { Component } from 'react'
import { injectIntl, defineMessages } from 'react-intl'

interface Props {

}

interface State {

}

const messages = defineMessages({
  Honolulu: {
    id: 'publishPicker.Honolulu',
    defaultMessage: 'Honolulu'
  }
});

class Intl extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.tl = (id: string, values: string) => props.intl.formatMessage(id, values);
  }
  private tl;

  render() {
    const name = this.tl(messages.Honolulu);
    return (
      <div>

      </div>
    )
  }
}


export default injectIntl(Intl);