import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { replace } from 'connected-react-router';

import { connect } from '../../index';
import bindActions from '../../actions';

import styles from './index.scss';

@connect(
  state => ({ ...state }),
  dispatch => ({ dispatch, actions: bindActionCreators(bindActions, dispatch) })
)
class Page extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      loadData: PropTypes.func,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    res: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { actions, dispatch } = this.props;
    actions.loadData('hello wshang.');
    dispatch(replace('?hello=wshang'));
  }

  render() {
    const { res } = this.props;
    return (
      <div className={styles.header}>
        {res}
      </div>
    );
  }
}

export default Page;
