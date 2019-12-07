import React, { Component } from 'react'
import { injectIntl, defineMessages, WrappedComponentProps, MessageDescriptor } from 'react-intl'

interface Props {

}

type TP = Props & WrappedComponentProps;
interface State {

}

const messages = defineMessages({
  Honolulu: {
    id: 'name',
    defaultMessage: 'star'
  }
});

class Intl extends Component<TP, State> {
  constructor(props: TP) {
    super(props)
    this.tl = (id: MessageDescriptor): string => props.intl.formatMessage(id);
  }

  private tl: (id: MessageDescriptor) => string;

  render() {

    return (
      <div>
        my name is {this.tl(messages.Honolulu)}
      </div>
    )
  }
}


export default injectIntl(Intl);