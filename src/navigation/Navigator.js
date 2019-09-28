import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewProfile from '../screens/profile/NewProfile';
import Home from '../screens/Home';


function Navigator() {
  return(
    <Router>
       <Switch>
          <Route path="/newProfile">
            <NewProfile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
};

export default Navigator;

