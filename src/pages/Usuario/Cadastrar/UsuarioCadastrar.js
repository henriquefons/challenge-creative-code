import { Typography } from '@material-ui/core';
import React from 'react';
import Content from '../../../components/Content/Content';
import UIContainer from '../../../components/UI/Container/Container';

const UsuarioCadastrar = () => (
  <Content>
    <UIContainer>
      <Typography
        paragraph
        style={{ fontSize: 30, fontWeight: 700, color: '#3443CE' }}
      >
        Cadastro de usuario
      </Typography>
    </UIContainer>
  </Content>
);

export default UsuarioCadastrar;
