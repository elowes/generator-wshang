import { combineReducers } from 'redux';

import { meta as mainMeta, reducer as mainReducer } from '../../app-main';

const rootReducer = combineReducers({
  [mainMeta.id]: mainReducer
});

export default rootReducer;
