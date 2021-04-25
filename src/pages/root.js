import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import StoreProvider from '../components/Store/provider';
import RoutesPrivate from '../utils/Routes/PrivateRoute';
import Home from './Home/Home';
import LoginUser from './Login/User/LoginUser';

const Root = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={LoginUser} />
        <RoutesPrivate exact path="/" component={Home} />
        <RoutesPrivate path="*">
          <Content>Página não encontrada</Content>
        </RoutesPrivate>
      </Switch>
    </StoreProvider>
  </Router>
);

export default Root;
