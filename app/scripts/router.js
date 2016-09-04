import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import ResumeModal from './components/ResumeModal';
import CaseStudy from './components/CaseStudy';
import store from './store';

const router = (
  <Router history={store.settings.history} onUpdate={() => window.scrollTo(0, 0)} >
    <Route path="/" component={App}>
      <Route path="resume" component={ResumeModal}/>
    </Route>
    <Route path="/projects/:project" component={CaseStudy}/>
  </Router>
);

export default router;
