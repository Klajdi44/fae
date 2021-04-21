import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  darkOn: boolean;
  setDarkOn: React.Dispatch<React.SetStateAction<boolean>>;
};
function BottomMenu(props: Props) {
  const { page, setPage, setDarkOn, darkOn } = props;
  return (
    <div className='bottom-menu'>
      <Link to='/'>
        <div onClick={() => setPage(1)} className='wrapper'>
          <i className={page === 1 ? 'fas fa-home active' : 'fas fa-home'}></i>
          <small>Home</small>
        </div>
      </Link>
      <Link to='/SearchMeal'>
        <div onClick={() => setPage(2)} className='wrapper'>
          <i
            className={page === 2 ? 'fas fa-search active' : 'fas fa-search'}
          ></i>
          <small>Search</small>
        </div>
      </Link>
      <Link to='/Favorites'>
        <div onClick={() => setPage(3)} className='wrapper'>
          <i
            className={page === 3 ? 'fas fa-heart active' : 'fas fa-heart'}
          ></i>
          <small>Favorites</small>
        </div>
      </Link>

      <div
        className='darkMode-wrapper'
        onClick={() => setDarkOn(prevState => !prevState)}
      >
        <div
          className={darkOn ? 'dark-on darkCircle' : 'dark-off darkCircle'}
        ></div>
      </div>
    </div>
  );
}

export default BottomMenu;
