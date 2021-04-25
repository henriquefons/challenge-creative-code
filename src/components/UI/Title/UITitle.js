import React from 'react';
import './UITitle.css';

const UITitle = ({ ...children }) => <p className="UITitle">{children.name}</p>;

export default UITitle;
