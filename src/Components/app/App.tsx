import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import fetchData from '../../modules/fetchData';
import Card from '../card/Card';
import Header from '../header/Header';
import LoaderComponent from '../loader/LoaderComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardItem from '../cardItem/CardItem';
import Categories from '../categories/Categories';
import SearchByName from '../searchByName/SearchByName';
import SearchMeal from '../searchMeal/SearchMeal';

function App(): JSX.Element {
  const [category, setCategory] = useState<string>('Beef');
  const { data, error, loadingState } = fetchData(`
     https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

  const [inputValue, setInputValue] = useState<any>('');

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Categories category={category} setCategory={setCategory} />
              <small className='or'>or</small>
              <SearchByName />
              {data === null ? (
                <LoaderComponent />
              ) : (
                <Card animation={true} category={category} data={data?.meals} />
              )}
            </Route>
            <Route path='/CardItem/:id'>
              <CardItem />
            </Route>
            <Route path='/SearchMeal'>
              <SearchMeal
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
