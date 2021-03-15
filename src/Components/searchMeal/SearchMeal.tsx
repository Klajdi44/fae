import React, { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import fetchData from '../../modules/fetchData';
import Card from '../card/Card';
import Loader from '../loader/LoaderComponent';

type Props = {
  inputValue: string;
  setInputValue: React.Dispatch<any>;
};
function SearchMeal(props: Props) {
  const { data, loadingState, error } = fetchData(
    ` https://www.themealdb.com/api/json/v1/1/search.php?s=${props.inputValue}`
  );

  if (props.inputValue?.length === 0) {
    props.setInputValue(null);
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
          inputValue={props.inputValue}
          intent='danger'
          linkTo='/'
          appearance='minimal'
          buttonTxt='Cancel'
          onSumbit={(e: React.FormEvent<Element>) => onsubmit(e)}
          onInput={(e: { target: { value: React.SetStateAction<string> } }) =>
            props.setInputValue(e.target.value)
          }
        />
      </div>
      {error && <div>Something went wrong, Pleas try again </div>}
      {loadingState === 'loading' && <Loader />}
      {mealObj.meals.length &&
        mealObj.meals.map(meal => (
          <Card key={Math.random()} animation={false} data={mealObj?.meals} />
        ))}
      {props.inputValue === null ? (
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
