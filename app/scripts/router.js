import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import store from './store';

const router = (
  <Router history={store.settings.history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

export default router;
