import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../history';
import rootReduer from '../reducers';
import createEnhancers from './enhancers';

function configStore() {
  const store = createStore(
    connectRouter(history)(rootReduer),
    createEnhancers(),
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReduer));
    });
  }
  return store;
}

export default configStore;
