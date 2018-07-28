import { handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-react-router';

import actions from '../actions';

const initialState = {
  res: 'Loading...',
  query: null,
};

export default handleActions({
  // 这里处理 url 变化
  [LOCATION_CHANGE](state, { payload }) {
    return {
      ...state,
      query: payload,
    };
  },
  [actions.loadData](state, { error, payload }) {
    if (!error) {
      return {
        ...state,
        res: payload,
      };
    }
    throw Error('error');
  },
}, initialState);
