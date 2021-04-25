import React from 'react';
import { Grid } from '@material-ui/core';
import './Container.css';

const UIContainer = ({ ...children }) => (
  <Grid className="UIContainer">{children.children}</Grid>
);

export default UIContainer;
