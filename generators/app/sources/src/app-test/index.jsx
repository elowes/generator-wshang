import { connect as reduxConnect } from 'react-redux';

import meta from './meta';

export { default } from './components/Page';
export { default as meta } from './meta';
export { default as reducer } from './reducers';

export function connect(
  mapStateToProps = () => ({}),
  mapDispatchToProps,
) {
  return reduxConnect(
    state => mapStateToProps({
      ...state[meta.id],
    }),
    mapDispatchToProps,
  );
}
