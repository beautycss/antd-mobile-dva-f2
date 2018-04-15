import React, { Component } from 'react';

import MainLayout from '../../layouts/mainLayout/MainLayout';
import styles from './home.less';

export default class Home extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <MainLayout>
        <div className={styles.home}>
          <h1>antd-mobile-dva-f2</h1>
          <div>
            <ul style={{ paddingLeft: 0 }}>
              <li>Antd Mobile 2</li>
              <li>Dva 2</li>
              <li>Roadhog 2</li>
              <li>F2</li>
            </ul>
          </div>
        </div>
      </MainLayout>
    );
  }
}
