import React from 'react';
import { Link } from 'react-router-dom';

function BottomMenu() {
  return (
    <div className='bottom-menu'>
      <Link to='/Favorites'>
        <div className='wrapper'>
          <i className='fas fa-heart'></i>
          <small>favorites</small>
        </div>
      </Link>
    </div>
  );
}

export default BottomMenu;
