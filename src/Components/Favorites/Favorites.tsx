import React, { useEffect } from 'react';
import Card from '../card/Card';
import { Meals } from '../../modules/fetchData';

function Favorites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const localStorageArray = JSON.parse(localStorage.getItem('favorites'));

  return (
    <div className='favorites'>
      <h1>Favorites</h1>
      <small>
        {' '}
        Recipies: {localStorageArray !== null && localStorageArray.length}
      </small>
      {localStorageArray === null ? (
        <small>No favorites found</small>
      ) : localStorageArray !== null && localStorageArray.length < 1 ? (
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
          localStorageArray.map((meal: Meals) => (
            <Card key={meal.strMealThumb} animation data={meal} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
{
  /* <small>No favorites found</small> */
}
