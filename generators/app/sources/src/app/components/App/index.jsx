import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import TestPage from '../../../app-test';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={TestPage} />
    </Switch>
  </main>
);


export default hot(module)(App);
