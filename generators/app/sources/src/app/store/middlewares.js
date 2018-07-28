import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise';

import history from '../history';

export default applyMiddleware(
  routerMiddleware(history),
  promiseMiddleware,
);
