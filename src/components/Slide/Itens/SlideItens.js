import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import './SlideItens.css';

const SlideItens = ({ ...children }) => (
  <Grid className="slide-itens" onClick={children.action}>
    <IconButton>{children.icon}</IconButton>
    <span className="slide-itens__name">{children.name}</span>
  </Grid>
);

export default SlideItens;
