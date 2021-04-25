import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import LoginUser from './Login/User/LoginUser';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginUser} />
      <Route exact path="/dashbord" component={Content} />
    </Switch>
  </Router>
);

export default Root;
