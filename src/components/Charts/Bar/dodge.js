import React, { Component } from 'react';

import createF2 from 'f2react';
import autoWidth from '../autoWidth';

@autoWidth()
export default class BarDodgeColumn extends Component {
  state = {
  };

  F2Chart = createF2((chart, configs) => {
    // console.log(chart);
    chart.interval().position('y1*y2')
      .color('x')
      .adjust({
        type: 'dodge',
        marginRatio: 0.1, // 设置分组间柱子的间距
      });
    chart.render();
  });

  render() {
    const { data, width, height, title, padding, configs } = this.props;

    return (
      <div className="f2-chart" style={{ height }}>
        <div>
          <this.F2Chart
            data={data}
            width={width}
            height={height}
            configs={configs}
          />
        </div>
      </div>
    );
  }
}

