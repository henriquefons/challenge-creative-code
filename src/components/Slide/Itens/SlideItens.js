import React from 'react';
import { IconButton } from '@material-ui/core';
import './SlideItens.css';

const SlideItens = ({ ...children }) => (
  <div className="slide-itens">
    <IconButton>{children.icon}</IconButton>
    <span className="slide-itens__name">{children.name}</span>
  </div>
);

export default SlideItens;
