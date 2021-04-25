import React from 'react';
import './Logo.css';

const UILogo = ({ ...children }) => (
  <p className="UILogo" style={{ fontSize: `${children.size}` }}>
    Creative <span>Code</span>
  </p>
);

export default UILogo;
