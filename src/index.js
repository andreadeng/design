import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import './style.css';

import App from './App';
import Home from './containers/Home';
import Challenges from './containers/Challenges';

class List extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="challenges" component={Challenges} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('root'));