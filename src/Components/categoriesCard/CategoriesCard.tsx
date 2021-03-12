import React from 'react';
import fetchData from '../../modules/fetchData';
function CategoriesCard(props) {
  const { data, loadingState, error } = fetchData(
    ' https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  return <div></div>;
}

export default CategoriesCard;
