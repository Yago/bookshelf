import React               from 'react';
import ReactDOM            from 'react-dom';
import { Router, Route }   from 'react-router';
import { createHistory }   from 'history';

import NotFound            from './components/NotFound.jsx';

/*
  Routes
*/

const routes = (
  <Router history={createHistory()}>
    <Route path="*" component={NotFound}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
