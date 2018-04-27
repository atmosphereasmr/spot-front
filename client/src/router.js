import React from 'react';
import { Route, Switch, IndexRedirect, Redirect } from 'react-router-dom';

import Home from './Components/Home/home.js'
import Search from './Components/Search/search.js'

export default (
  <Switch>
    <Route exact path="/" component={() => <Redirect to="/home:access" />}/>
    <Route path="/home:access" component={Search} />
  </Switch>
)
