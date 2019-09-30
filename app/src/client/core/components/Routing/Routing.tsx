import React from 'react';
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';

import { getRouterConfig } from '../../functions';
import { PrivateRoute } from './PrivateRoute';
import { FreeRoute } from './FreeRoute';
import { Home } from './../../../views/home/home/components/Home/Home';

const Router = getRouterConfig(BrowserRouter, StaticRouter);

const NotFound: React.SFC<{}> = () => (<div>Not found</div>);
const LoginRegisterForm: React.SFC<{}> = () => (<div>Login...</div>);
const User: React.SFC<{}> = () => (<div>User...</div>);

interface IRoutingProps {
  loggedIn: boolean;
  context?: any;
  location?: any;
}

export const Routing: React.SFC<IRoutingProps> = ({ loggedIn, context, location }) => (
  <Router context={context} location={location}>
    <Switch>
      <PrivateRoute path="/home" component={() => <Home />} loggedIn={loggedIn} />
      <PrivateRoute path="/user/:username" component={props => <User {...props} />} loggedIn={loggedIn} />
      <FreeRoute exact path="/" component={() => <LoginRegisterForm />} loggedIn={loggedIn} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
