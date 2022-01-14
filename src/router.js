

import React from 'react';
import { Router, Route } from 'dva/router';
import Layout from './component/Layout/Layout';
import Home from './routes/Home';
import MicroPage from './routes/MicroPage';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/micro-vue3/*" component={MicroPage} />
      </Route>
    </Router>
  );
}
