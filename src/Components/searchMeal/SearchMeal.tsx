import React, { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import fetchData from '../../modules/fetchData';
import Card from '../card/Card';
import Loader from '../loader/LoaderComponent';

function SearchMeal() {
  const [inputValue, setInputValue] = useState<any>('');
  const { data, loadingState, error } = fetchData(
    ` https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
  );

  if (inputValue?.length === 0) {
    setInputValue(null);
  }

  type Meals = {
    idMeal: number;
    strMealThumb: string;
    strMeal: string;
  };

  const mealObj: {
    meals: Meals[];
  } = {
    meals: [],
  };

  data?.meals !== null &&
    data?.meals.map((meal: Meals) => {
      return mealObj.meals.push({
        idMeal: meal.idMeal,
        strMealThumb: meal.strMealThumb,
        strMeal: meal.strMeal,
      });
    });

  function onsubmit(e: React.FormEvent<Element>) {}
  return (
    <div>
      <div>
        <SearchBar
          placeHolder='Search your fav food'
          inputValue={inputValue}
          intent='danger'
          linkTo='/'
          appearance='minimal'
          buttonTxt='Cancel'
          onSumbit={(e: React.FormEvent<Element>) => onsubmit(e)}
          onInput={(e: { target: { value: React.SetStateAction<string> } }) =>
            setInputValue(e.target.value)
          }
        />
      </div>
      {error && <div>Something went wrong, Pleas try again </div>}
      {loadingState === 'loading' && <Loader />}
      {mealObj.meals.length &&
        mealObj.meals.map(meal => (
          <Card animation={false} data={mealObj?.meals} />
        ))}
      {inputValue === null ? (
        <div style={{ color: '#000', textAlign: 'start', marginLeft: '2em' }}>
          Search the food you love{' '}
        </div>
      ) : mealObj.meals.length > 0 ? (
        ''
      ) : (
        <div style={{ color: '#000', textAlign: 'start', marginLeft: '2em' }}>
          Meal not found!{' '}
        </div>
      )}
    </div>
  );
}

export default SearchMeal;
