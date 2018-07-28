import { createAction } from 'redux-actions';

export default function (prefix, actions) {
  const res = Object.keys(actions).reduce((results, key) => {
    // eslint-disable-next-line no-param-reassign
    results[key] = createAction(`${prefix}_${key}`, actions[key]);
    return results;
  }, {});

  return res;
}
