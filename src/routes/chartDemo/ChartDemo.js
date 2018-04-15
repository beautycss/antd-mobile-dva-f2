import React, { Component } from 'react';

import MainLayout from '../../layouts/mainLayout/MainLayout';
import Bar from '../../components/Charts/Bar';
import Pie from '../../components/Charts/Pie';
import BarDodge from '../../components/Charts/Bar/dodge';

const barData = [
  { x: '1952 年', y: 52 },
  { x: '1956 年', y: 61 },
  { x: '1957 年', y: 166 },
  { x: '1958 年', y: 48 },
  { x: '1960 年', y: 38 },
  { x: '1962 年', y: 38 },
];

const barDodgeData = [
  { x: 'London', y1: 'Jan.', y2: 18.9 },
  { x: 'London', y1: 'Feb.', y2: 28.8 },
  { x: 'London', y1: 'Mar.', y2: 39.3 },
  { x: 'London', y1: 'Apr.', y2: 81.4 },
  { x: 'London', y1: 'May.', y2: 47 },
  { x: 'London', y1: 'Jun.', y2: 20.3 },
  { x: 'London', y1: 'Jul.', y2: 24 },
  { x: 'London', y1: 'Aug.', y2: 35.6 },
  { x: 'Berlin', y1: 'Jan.', y2: 12.4 },
  { x: 'Berlin', y1: 'Feb.', y2: 23.2 },
  { x: 'Berlin', y1: 'Mar.', y2: 34.5 },
  { x: 'Berlin', y1: 'Apr.', y2: 99.7 },
  { x: 'Berlin', y1: 'May.', y2: 52.6 },
  { x: 'Berlin', y1: 'Jun.', y2: 35.5 },
  { x: 'Berlin', y1: 'Jul.', y2: 37.4 },
  { x: 'Berlin', y1: 'Aug.', y2: 42.4 }
];

const pieData = [
  { x: '芳华', y: 0.4, a: '1' },
  { x: '妖猫传', y: 0.2, a: '1' },
  { x: '机器之血', y: 0.18, a: '1' },
  { x: '心理罪', y: 0.15, a: '1' },
  { x: '寻梦环游记', y: 0.05, a: '1' },
  { x: '其他', y: 0.02, a: '1' },
];

export default class ChartDemo extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <MainLayout>
        <div>
          {/* <h1 className="text-center">图表演示</h1> */}
          <div>
            <BarDodge
              data={barDodgeData}
              // width={360} // 不设置宽度则宽度自适应父容器
              height={360} // 设置高度
              padding={30} // 可传入padding
              // configs={{}} // 需要传入给chart的一些配置
            />
          </div>
          <div>
            <Bar
              data={barData}
              height={300}
              padding={30}
            />
          </div>
          <div>
            <Pie
              data={pieData}
              // width={300}
              height={320}
              padding={30}
              configs={{
                colors: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', 'yellow', 'yellow', 'yellow', 'yellow'],
                legend: {
                  marker: 'square', // 设置图例 marker 的显示样式
                },
              }}
            />
          </div>
        </div>
      </MainLayout>
    );
  }
}
