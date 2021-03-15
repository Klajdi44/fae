import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  function onsubmit(e: React.FormEvent<Element>) {}
  return (
    <section className='search-meal'>
      <article>
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
      </article>
      {error && <div>Something went wrong, Pleas try again </div>}
      {loadingState === 'loading' && <Loader />}
      <article>
        {data?.meals?.length && <Card animation={false} data={data.meals} />}
      </article>
      {props.inputValue === null ? (
        <article
          style={{ color: '#000', textAlign: 'start', marginLeft: '2em' }}
        >
          Search the food you love{' '}
        </article>
      ) : data?.meals?.length > 0 ? (
        ''
      ) : (
        <article
          style={{ color: '#000', textAlign: 'start', marginLeft: '2em' }}
        >
          Meal not found!{' '}
        </article>
      )}
    </section>
  );
}

export default SearchMeal;
