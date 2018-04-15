import React, { Component } from 'react';
import { connect } from 'dva';
import MainFooter from '../../components/MainFooter';

import styles from './mainLayout.less';

@connect(({ global, loading }) => ({
  global,
  loading: loading.models.global,
}))
export default class MainLayout extends Component {

  render() {
    // children为图表，两个route中的内容；
    const { children } = this.props;
    return (
      <div className={styles.moduleMainLayout}>
        <MainFooter>
          {children}
        </MainFooter>
      </div>
    );
  }
}

