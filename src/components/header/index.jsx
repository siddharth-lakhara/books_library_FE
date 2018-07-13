import React from 'react';
import './header.css';

const Header = () => (
  <div className="header-main">
    <span className="header-the">
      The
      {' '}
    </span>
    <span className="header-book">
      Book
      {' '}
    </span>
    <span className="header-shelf">
      Shelf
    </span>
    <hr className="header-hr" />
  </div>
);

export default Header;
