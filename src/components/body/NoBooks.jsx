import React from 'react';
import RefreshImg from './refresh.png';
import './NoBooks.css';

const NoBooksPage = ({ updateBooks }) => (
  <div className="NoBooks-main">
    <div>
        OOps! No Books Found
    </div>
    <img
      className="refresh-image"
      src={RefreshImg}
      alt="refresh"
      onClick={updateBooks}
      role="button"
      tabIndex={0}
    />
  </div>
);

export default NoBooksPage;
