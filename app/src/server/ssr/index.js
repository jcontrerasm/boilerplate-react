import React, { Component } from 'react';

import { App } from '../../client/views/App';

export class ServerClient extends Component {
  render() {
    const { location, context } = this.props;

    return(
      <App location={location} context={context}/>
    );
  }
}
