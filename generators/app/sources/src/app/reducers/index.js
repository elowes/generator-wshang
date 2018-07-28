import { combineReducers } from 'redux';

import { meta as testMeta, reducer as testReducer } from '../../app-test';

const rootReducer = combineReducers({
  [testMeta.id]: testReducer,
});

export default rootReducer;
