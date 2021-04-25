import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import StoreProvider from '../components/Store/provider';
import RoutesPrivate from '../utils/Routes/PrivateRoute';
import LoginUser from './Login/User/LoginUser';

const Root = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route exact path="/login" component={LoginUser} />
        <RoutesPrivate exact path="/" component={Content} />
        <RoutesPrivate path="*" component={Content} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default Root;
