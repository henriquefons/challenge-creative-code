import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import UILogo from '../UI/Logo/Logo';
import './Login.css';
import StoreContext from '../Store/context';

const initialValues = {
  user: '',
  password: '',
};

const login = (data) => {
  const { user, password } = data;
  if (user === 'admin' && password === 'admin') {
    return { token: 'henriquebonitao' };
  }
  return { errorLogin: 'Usuário ou senha inválido' };
};

const Login = () => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    setToken(null);
    localStorage.clear();
  }, []);

  const changeValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  function onSubmit(ev) {
    ev.preventDefault();

    const { token, errorLogin } = login(values);

    if (token) {
      localStorage.setItem('token', token);
      setToken(token);
      history.push('/');
    }
    if (errorLogin) {
      setError(errorLogin);
      setValues(initialValues);
    }
  }

  return (
    <div className="login">
      <div className="login__form">
        <form className="login__form-container" onSubmit={onSubmit}>
          <h3 className="login__form-title">Login</h3>
          <div className="login__form-input">
            <TextField
              value={values.user}
              onChange={changeValues}
              name="user"
              placeholder="Insira o nome do usuário"
              label="Usuário"
              fullWidth
            />
            <TextField
              value={values.password}
              name="password"
              onChange={changeValues}
              placeholder="Insira a senha do usuário"
              label="Senha"
              type="password"
              fullWidth
            />
            {error && <Typography color="error">{error}</Typography>}
          </div>
          <div className="login__form-actions">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setValues(initialValues)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
      <div className="login__content">
        <UILogo size="57px" />
      </div>
    </div>
  );
};

export default Login;
