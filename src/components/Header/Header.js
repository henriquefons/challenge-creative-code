import React from 'react';
import { Link } from 'react-router-dom';
import UILogo from '../UI/Logo/Logo';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="header__content">
      <Link to="/">
        <UILogo size="30px" />
      </Link>
    </div>
  </div>
);

export default Header;
