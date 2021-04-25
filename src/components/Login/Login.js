import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';

const initialValues = {
  user: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialValues);

  const changeValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  function onSubmit(ev) {
    ev.preventDefault();

    console.log(values);
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
        <p className="login__content-logo">
          Creative <span>Code</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
