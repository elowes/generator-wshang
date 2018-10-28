import { compose } from 'redux';

import middlewares from './middlewares';

/* eslint-disable */
const composeEnhancer = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

function createEnhancer() {
  return composeEnhancer(
    middlewares
  );
}

export default createEnhancer;
