import { Typography } from '@material-ui/core';
import React from 'react';
import Content from '../../../components/Content/Content';
import UIContainer from '../../../components/UI/Container/Container';

const UsuarioDetalhes = () => (
  <Content>
    <UIContainer>
      <Typography
        paragraph
        style={{ fontSize: 30, fontWeight: 700, color: '#3443CE' }}
      >
        User Details
      </Typography>
    </UIContainer>
  </Content>
);

export default UsuarioDetalhes;
