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

function App(): JSX.Element {
  const [category, setCategory] = useState<string>('Beef');
  const { data, error, loadingState } = fetchData(`
     https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  console.log(data);
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Categories category={category} setCategory={setCategory} />
              {data === null ? (
                <LoaderComponent />
              ) : (
                <Card category={category} data={data?.meals} />
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
