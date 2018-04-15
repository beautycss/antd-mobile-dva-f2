import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import styles from './style.less';

@connect(({ global, loading }) => ({
  global,
  loading: loading.models.global,
}))
export default class MainFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children, dispatch } = this.props;

    return (
      <div className={styles.moduleFooter}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: '',
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: '',
              }}
              />
            }
            selected={location.hash.includes('/home')}
            onPress={() => dispatch(routerRedux.push('/home'))}
            data-seed="home"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            title="仪表盘"
            key="仪表盘"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: '',
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: '',
              }}
              />
            }
            selected={location.hash.includes('/dashboard')}
            onPress={() => dispatch(routerRedux.push('/dashboard'))}
            data-seed="dashboard"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            title="图表演示"
            key="图表演示"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: '',
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: '',
              }}
              />
            }
            selected={location.hash.includes('/chartdemo')}
            onPress={() => dispatch(routerRedux.push('/chartdemo'))}
            data-seed="chartdemo"
          >
            {children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
