import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Slide from '../components/Slide/Slide';
import StoreProvider from '../components/Store/provider';
import PrivateComponent from '../utils/Routes/PrivateComponent';
import RoutesPrivate from '../utils/Routes/PrivateRoute';
import Home from './Home/Home';
import LoginUser from './Login/User/LoginUser';
import UsuarioCadastrar from './Usuario/Cadastrar/UsuarioCadastrar';
import UsuarioDetalhes from './Usuario/Detalhes/UsuarioDetalhes';
import UsuarioListar from './Usuario/Listar/UsuarioListar';

const Root = () => (
  <Router>
    <StoreProvider>
      <Route path="/login" component={LoginUser} />
      <PrivateComponent>
        <Slide />
        <Header />
      </PrivateComponent>
      <Switch>
        <RoutesPrivate exact path="/" component={Home} />
        <RoutesPrivate exact path="/usuario" component={UsuarioDetalhes} />
        <RoutesPrivate exact path="/usuario/listar" component={UsuarioListar} />
        <RoutesPrivate
          exact
          path="/usuario/cadastrar"
          component={UsuarioCadastrar}
        />
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
