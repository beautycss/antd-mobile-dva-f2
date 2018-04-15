import React, { Component } from 'react';

import createF2 from '../F2React';
import autoWidth from '../autoWidth';

@autoWidth()
export default class ChartDemo extends Component {
  state = {
    colors: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'],
  };

  F2Chart = createF2((chart, configs) => {
    const { data } = this.props;
    const colors = configs.colors || this.state.colors;
    const map = {};

    if (data) {
      data.map((obj) => {
        map[obj.x] = `${obj.y}%`;
      });
      chart.legend({
        position: 'right',
        itemFormatter(val) {
          return `${val}  ${map[val]};`;
        },
      });
    }

    // chart.coord('polar');
    chart.coord('polar', {
      transposed: true,
      radius: 0.85,
    });
    chart.axis(false);
    chart.interval()
      .position('a*y')
      .color('x', colors)
      .adjust('stack')
      .style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round',
      });
    // .animate({
    //   appear: {
    //     duration: 1200,
    //     easing: 'bounceOut'
    //   }
    // });
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
