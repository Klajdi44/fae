import React from 'react';
import Card from '../card/Card';

function Favorites() {
  const localStorageArray = JSON.parse(localStorage.getItem('favorites'));

  return (
    <div className='favorites'>
      <h1>Favorites</h1>
      {localStorageArray === null ? (
        <small>No favorites found</small>
      ) : localStorageArray !== null && localStorageArray.length <= 1 ? (
        <small>No favorites found</small>
      ) : (
        ''
      )}
      {/* {localStorageArray !== null && localStorageArray.length === 0 && (
        <small>No favorites found</small>
      )} */}
      <div className='favorites-content'>
        {localStorageArray !== null &&
          localStorageArray.length > 0 &&
          localStorageArray.map(meal => <Card key={meal.id} data={meal} />)}
      </div>
    </div>
  );
}

export default Favorites;
{
  /* <small>No favorites found</small> */
}
