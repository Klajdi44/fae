import React from 'react';
import { Link } from 'react-router-dom';

function SearchbyName() {
  return (
    <Link to='/SearchMeal'>
      <div className='search-byName-wrapper'>
        <h3>Search meal by name</h3>
        <i className='fas fa-search'></i>
      </div>
    </Link>
  );
}

export default SearchbyName;
