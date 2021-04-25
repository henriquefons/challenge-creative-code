import React from 'react';
import './Content.css';

const Content = ({ ...children }) => (
  <main className="content">{children.children}</main>
);

export default Content;
