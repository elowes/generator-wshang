import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import MainPage from '../../../app-main';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </main>
);


export default hot(module)(App);
