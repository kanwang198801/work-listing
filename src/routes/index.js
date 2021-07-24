import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

const routes = () => (
  <Route
    render={({ location }) => (
      <Switch location={location}>
        <Route
          path="/"
          component={Home}
          key="Home"
          exact={true}
        />
        <Route path="" component={NotFound} />
      </Switch>
    )}
  />
);

export default routes;
