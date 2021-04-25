import React from 'react';
import './Logo.css';

const UILogo = ({ children }) => (
  <p className="UILogo" style={{ fontSize: `${children}` }}>
    Creative <span>Code</span>
  </p>
);

export default UILogo;
