import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { meta as mainMeta, reducer as mainReducer } from '../../app-main';

/* eslint-disable */
const loadingReducer = handleActions({
  '@@loading/show'(state, { payload }) {
    return {
      ...state,
      [payload]: true,
    };
  },
  '@@loading/hide'(state, { payload }) {
    return {
      ...state,
      [payload]: false,
    };
  },
}, { });
/* eslint-enable */

const rootReducer = combineReducers({
  $loading: loadingReducer,
  [mainMeta.id]: mainReducer
});

export default rootReducer;
