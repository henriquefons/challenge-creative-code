import { Button, TextField } from '@material-ui/core';
import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <div className="login__form">
      <form className="login__form-container">
        <h3 className="login__form-title">Login</h3>
        <div className="login__form-input">
          <TextField
            placeholder="Insira o nome do usuário"
            label="Usuário"
            fullWidth
          />
          <TextField
            placeholder="Insira a senha do usuário"
            label="Senha"
            type="password"
            fullWidth
          />
        </div>
        <div className="login__form-actions">
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </div>
      </form>
    </div>
    <div className="login__content">
      <p className="login__content-logo">
        Creative <span>Code</span>
      </p>
    </div>
  </div>
);

export default Login;
