import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Users from './features/users';
import FormAdd from './features/users/FormAdd';

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/users-list">
        <Users />
      </Route>
      <Route path="/add-new-user">
        <FormAdd />
      </Route>
      <Route path="/">
        <Redirect to="/users-list"></Redirect>
      </Route>
    </Switch>
  </HashRouter>
);
