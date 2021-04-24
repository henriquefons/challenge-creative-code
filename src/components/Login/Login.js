import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <div className="login__form">
      <form className="login__form-container">
        <h3 className="login__form-title">Login</h3>
        <div className="login__form-input">
          <label htmlFor="user">
            Usuario
            <input id="user" type="text" className="validate" />
          </label>
          <label htmlFor="password">
            Senha
            <input id="password" type="password" className="validate" />
          </label>
        </div>
        <input type="submit" />
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
