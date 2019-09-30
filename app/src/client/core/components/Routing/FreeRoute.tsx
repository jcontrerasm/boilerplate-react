import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const redirectTo = (state) => {
  let redirect = '/home';
  if (state) { redirect = state.from.pathname; }
  return redirect;
};

export const FreeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => rest.loggedIn === false
      ? <Component {...props} />
      : <Redirect to={{ pathname: redirectTo(props.location.state) }} />}
  />
)
