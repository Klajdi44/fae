import React, { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import fetchData from '../../modules/fetchData';
import CardItem from '../cardItem/CardItem';

function SearchMeal() {
  const [inputValue, setInputValue] = useState<any>('');

  if (inputValue?.length === 0) {
    setInputValue(null);
  }

  function onsubmit(e: React.FormEvent) {
    e.preventDefault();
  }

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
      <CardItem
        inputValue={inputValue}
        url={` https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`}
      />
    </div>
  );
}

export default SearchMeal;
