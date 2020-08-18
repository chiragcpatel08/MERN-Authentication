import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"; 
import Nomatch from './components/Nomatch';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboart from './components/Dashboart';
import Profile from './components/Profile';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Signup">
              <Signup/>
            </Route>
            <Route path="/Dashboard">
              <Dashboart/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route exact path="*">
              <Nomatch/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

