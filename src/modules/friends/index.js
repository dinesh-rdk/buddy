import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import New from './New';
import Edit from './Edit';

export default () => (
  <Switch>
    <Route exact path="/friends" component={List} />
    <Route exact path="/friends/new" component={New} />
    <Route exact path="/friends/:id/edit" component={Edit} />
  </Switch>
);
