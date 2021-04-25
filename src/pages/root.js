import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Slide from '../components/Slide/Slide';
import StoreProvider from '../components/Store/provider';
import PrivateComponent from '../utils/Routes/PrivateComponent';
import RoutesPrivate from '../utils/Routes/PrivateRoute';
import LoginUser from './Login/User/LoginUser';

const Root = () => (
  <Router>
    <StoreProvider>
      <Route path="/login" component={LoginUser} />
      <PrivateComponent>
        <Slide />
        <Header />
      </PrivateComponent>
      <Switch>
        <RoutesPrivate exact path="/">
          <Content>Home</Content>
        </RoutesPrivate>
        <PrivateComponent>
          <RoutesPrivate path="*">
            <Content>Página não encontrada</Content>
          </RoutesPrivate>
        </PrivateComponent>
      </Switch>
    </StoreProvider>
  </Router>
);

export default Root;
