import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { message } from 'antd';
import { replace } from 'connected-react-router';

import { connect } from '../../index';
import bindActions from '../../actions';


import styles from './index.less';

@connect(
  state => ({ ...state }),
  dispatch => ({ dispatch, actions: bindActionCreators(bindActions, dispatch) }),
)
export default class Page extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      loadData: PropTypes.func,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    res: PropTypes.string.isRequired,
    query: PropTypes.shape({}),
  }

  static defaultProps = {
    query: {},
  }

  componentDidMount() {
    const { actions, dispatch } = this.props;
    actions.loadData('Hello World.');
    dispatch(replace('?test=true'));
    message.success('success');
  }

  render() {
    const { res, query } = this.props;
    return [
      <div className={styles.container} key="res">
        {res}
      </div>,
      <pre key="query">
        {
          query && JSON.stringify(query, null, 2)
        }
      </pre>,
    ];
  }
}
