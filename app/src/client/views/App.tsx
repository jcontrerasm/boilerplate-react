import React, { Component } from 'react';

import { Routing } from '../core/components';
import AuthService from '../services/auth/Auth';

import './../../../assets/css/style.css';

interface State {
  loggedIn: boolean;
}

export class App extends Component<{}, State> {

  state = {
    loggedIn: false
  }

  async getLogin() {
    const { isAuthenticated } = await AuthService.login();
    this.setState({ loggedIn: isAuthenticated });
  }

  componentDidMount() {
    this.getLogin();
  }

  render() {
    const { loggedIn } = this.state;

    return(
      <Routing loggedIn={loggedIn}/>
    );
  }
}
