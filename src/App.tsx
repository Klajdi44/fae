import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchData from './modules/fetchData';
import Card from './Components/Card';
import Nav from './Components/Nav';
import LoaderComponent from './Components/LoaderComponent';

function App(): JSX.Element {
  const { data, error, loadingState } = fetchData(
    ' https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  console.log(data);
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        {loadingState === 'loading' && <LoaderComponent />}

        {data?.length === 0 ? <LoaderComponent /> : <Card data={data} />}
      </header>
    </div>
  );
}

export default App;
