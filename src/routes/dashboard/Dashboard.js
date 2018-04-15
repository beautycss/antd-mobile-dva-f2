import React, { Component } from 'react';
import { connect } from 'dva';

import MainLayout from '../../layouts/mainLayout/MainLayout';
import Bar from '../../components/Charts/Bar';
import Pie from '../../components/Charts/Pie';

import styles from './dashboard.less';

@connect(({ dashboard, loading }) => ({
  dashboard,
  loading: loading.models.dashboard,
}))
export default class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'dashboard/getFakeChartData',
      payload: {
        time: Date.now(),
      },
    });
  }

  render() {
    const { dashboard } = this.props;
    const { barData, pieData } = dashboard;
    // console.log(dashboard);

    return (
      <MainLayout>
        <div className={styles.dashboard} style={{ padding: 30 }}>
          {/* <ChinaMapChart /> */}
          {barData.length > 0 && (
            <Bar
              data={barData}
              height={360}
              padding={30}
              configs={{
                colors: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', 'yellow', 'yellow', 'yellow', 'yellow'],
                legend: {
                  marker: 'square', // 设置图例 marker 的显示样式
                },
              }}
            />
          )}
          {pieData.length > 0 && (
            <Pie
              data={pieData}
              height={360}
              padding={30}
              configs={{
                colors: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'],
                legendData: pieData,
                legend:
                {
                  marker: 'square', // 设置图例 marker 的显示样式
                },
              }}
            />
          )}
        </div>
      </MainLayout>
    );
  }
}
