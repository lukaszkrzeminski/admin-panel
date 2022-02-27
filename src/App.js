import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Users from './features/users';
import FormAdd from './features/users/FormAdd';
import { toAddForm, toUsersList } from './routes';

export default () => (
  <HashRouter>
    <Switch>
      <Route path={toUsersList()}>
        <Users />
      </Route>
      <Route path={toAddForm()}>
        <FormAdd />
      </Route>
      <Route path="/">
        <Redirect to={toUsersList()}></Redirect>
      </Route>
    </Switch>
  </HashRouter>
);
