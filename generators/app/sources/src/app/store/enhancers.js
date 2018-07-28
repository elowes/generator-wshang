import { compose } from 'redux';

import middlewares from './middlewares';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

function createEnhancer() {
  return composeEnhancer(
    middlewares,
  );
}

export default createEnhancer;
