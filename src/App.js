import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Friends from './modules/friends';
import Layout from './components/Layout';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={() => <h1>Welcome Buddy!</h1>} />
      <Friends />
      <Route render={() => <h1>Sorry no route!</h1>} />
    </Switch>
  </Layout>
);
