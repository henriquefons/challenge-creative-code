import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@material-ui/core';
import UIContainer from '../../UI/Container/Container';
import UITitle from '../../UI/Title/UITitle';
import './UserDetails.css';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const UserDetails = () => {
  const [requestInfo, setRequestInfo] = useState(initialState);
  const [values, setValues] = useState('');

  const onSubmit = async () => {
    setRequestInfo({ ...initialState, loading: true });
    try {
      const response = await axios({
        method: 'get',
        baseURL: `https://api.github.com/users/${values}`,
      });
      setRequestInfo({ ...initialState, data: response.data });
    } catch (error) {
      setRequestInfo({ ...initialState, error });
    }
  };

  return (
    <>
      <UIContainer>
        <UITitle name="Seja bem vindo" />
        {requestInfo.data && (
          <p paragraph className="user-details__text">
            {requestInfo.data.name}
          </p>
        )}
      </UIContainer>

      {requestInfo.data && (
        <UIContainer>
          <UITitle name="Dados" />
          <p paragraph className="user-details__text">
            Nome: {requestInfo.data.name}
          </p>
          <p paragraph className="user-details__text">
            Usuario: {requestInfo.data.login}
          </p>
          <p paragraph className="user-details__text">
            Biografia: {requestInfo.data.bio}
          </p>
          <p paragraph className="user-details__text">
            Quantidade de repósitorios: {requestInfo.data.public_repos}
          </p>
        </UIContainer>
      )}

      {requestInfo.error && (
        <UIContainer>
          <UITitle name="Dados" />
          <Typography color="error">
            Aconteceu um erro ao carregar os dados
          </Typography>
        </UIContainer>
      )}

      <UIContainer>
        <UITitle name="Veja seu GitHub" />
        <div className="user-details__search">
          <TextField
            label="Username"
            placeholder="Digite seu username"
            style={{ width: '60%' }}
            value={values}
            onChange={(ev) => setValues(ev.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onSubmit}
          >
            {requestInfo.loading ? 'Procurando' : 'Procurar'}
          </Button>
        </div>
      </UIContainer>
    </>
  );
};

export default UserDetails;
