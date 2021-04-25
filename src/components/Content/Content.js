import React from 'react';
import './Content.css';

const Content = ({ ...children }) => (
  <div className="content">{children.children}</div>
);

export default Content;
