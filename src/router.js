import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Dynamic from 'dva/dynamic';
// import { getRouterConfig } from './common/router';
// console.log(getRouterConfig());

function RouterConfig({ history, app }) {
  const Home = Dynamic({
    app,
    component: () => import('./routes/home/Home'),
  });
  const Dashboard = Dynamic({
    app,
    models: () => [import('./models/dashboard')],
    component: () => import('./routes/dashboard/Dashboard'),
  });
  const ChartDemo = Dynamic({
    app,
    models: () => [import('./models/dashboard')],
    component: () => import('./routes/chartDemo/ChartDemo'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/chartdemo" component={ChartDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
