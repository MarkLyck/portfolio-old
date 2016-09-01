import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import ResumeModal from './components/ResumeModal';
import store from './store';

const router = (
  <Router history={store.settings.history}>
    <Route path="/" component={App}>
      <Route path="resume" component={ResumeModal}/>
    </Route>
  </Router>
);

export default router;
