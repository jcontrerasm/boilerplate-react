import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Router from '../../client/router';

export class App extends Component {

  state = {
    loggedIn: this.props.loggedIn
  }

  changeLoginState = (loggedIn) => {
    this.setState({ loggedIn });
  }

  render() {
    const { location, context } = this.props;
    const { loggedIn } = this.state;

    return (
      <div>
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphbook" />
        </Helmet>
        <Router
          loggedIn={loggedIn}
          changeLoginState={this.changeLoginState}
          location={location}
          context={context}
        />
      </div>
    )
  }
}
