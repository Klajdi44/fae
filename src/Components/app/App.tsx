import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import fetchData from '../../modules/fetchData';
import Card from '../card/Card';
import Header from '../header/Header';
import LoaderComponent from '../loader/LoaderComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardItem from '../cardItem/CardItem';

function App(): JSX.Element {
  const { data, error, loadingState } = fetchData(
    ' https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  console.log(data);
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/'>
              <Header />
              {loadingState === 'loading' && <LoaderComponent />}

              {data === null ? (
                <LoaderComponent />
              ) : (
                data !== null && <Card data={data?.meals} />
              )}
            </Route>
            <Route path='/CardItem/:id'>
              <CardItem />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
