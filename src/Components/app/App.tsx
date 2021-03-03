import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import fetchData from '../../modules/fetchData';
import Card from '../card/Card';
import Header from '../header/Header';
import LoaderComponent from '../loader/LoaderComponent';

function App(): JSX.Element {
  const { data, error, loadingState } = fetchData(
    ' https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  console.log(data);
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        {loadingState === 'loading' && <LoaderComponent />}

        {data === null ? (
          <LoaderComponent />
        ) : (
          data !== null && <Card data={data?.meals} />
        )}
      </header>
    </div>
  );
}

export default App;
