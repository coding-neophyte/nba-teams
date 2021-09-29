import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import TeamList from './TeamList';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />

          <Route path="/basketball-teams/"
            exact
            render={(routerProps) => <TeamList {...routerProps} />}
          />

          <Route path="/basketball-teams/:_id"
            exact
            render={(routerProps) => <Details {...routerProps} />}
          />

        </Switch>
      </Router>
    )
  }
}
