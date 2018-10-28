import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import history from '../history';

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

// eslint-disable-next-line
const loading = ({ dispatch }) => (next) => {
  return (action) => {
    if (isPromise(action.payload)) {
      dispatch({
        type: '@@loading/show',
        payload: action.type,
      });
      return action.payload.then((payload) => {
        dispatch({ payload, type: action.type });
        dispatch({
          type: '@@loading/hide',
          payload: action.type,
        });
        return { payload, type: action.type };
      }).catch((err) => {
        dispatch({ payload: err, type: action.type, error: true });
        dispatch({
          type: '@@loading/hide',
          payload: action.type,
        });
        return Promise.reject(err);
      });
    }
    return next(action);
  };
};

export default applyMiddleware(
  routerMiddleware(history),
  loading,
);
