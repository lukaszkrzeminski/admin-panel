import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Users from './features/users';
import { EditUser } from './features/users/EditUser';
import FormAdd from './features/users/FormAdd';
import { toAddForm, toUser, toUsersList } from './routes';

export default () => (
  <HashRouter>
    <Switch>
      <Route path={toUser()}>
          <EditUser />
      </Route>
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
