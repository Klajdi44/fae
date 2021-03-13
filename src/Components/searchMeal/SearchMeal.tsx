import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import fetchData from '../../modules/fetchData';
import cardItem from '../cardItem/CardItem';
import { useHistory } from 'react-router-dom';

function SearchMeal() {
  const { data, loadingState, error } = fetchData(
    ` https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
  );
  const history = useHistory();

  console.log(data);

  function onsubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <>
      <div>
        <SearchBar
          placeHolder='Search your fav food'
          inputValue=''
          buttonTxt='Search'
          onSumbit={e => onsubmit(e)}
        />
      </div>
    </>
  );
}

export default SearchMeal;
