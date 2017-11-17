import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import './style.css';

import App from './App';
import Home from './containers/Home';
import Questions from './containers/Questions';
import Itinerary from './containers/Itinerary';


class List extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="questions" component={Questions} />
          <Route path="itinerary" component={Itinerary} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('root'));