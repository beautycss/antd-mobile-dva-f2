import React, { Component } from 'react';

import createF2 from '../F2React';
import autoWidth from '../autoWidth';

@autoWidth()
export default class BarBasicColumn extends Component {
  state = {
    colors: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'],
  };

  F2Chart = createF2((chart, configs) => {
    const colors = (configs && configs.colors) || this.state.colors;
    chart.interval().position('x*y').color('x', colors);
    if (configs && configs.legend) {
      chart.legend('x', configs.legend);
    }
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

