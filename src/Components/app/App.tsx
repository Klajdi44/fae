import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import fetchData from '../../modules/fetchData';
import Card, { Meals } from '../card/Card';
import Header from '../header/Header';
import LoaderComponent from '../loader/LoaderComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardItem from '../cardItem/CardItem';
import Categories from '../categories/Categories';
import SearchByName from '../searchByName/SearchByName';
import SearchMeal from '../searchMeal/SearchMeal';
import BottomMenu from '../BottomMenu/BottomMenu';

function App(): JSX.Element {
  const [category, setCategory] = useState<string>('Beef');
  const { data, error, loadingState } = fetchData(`
     https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

  const [inputValue, setInputValue] = useState<any>('');
  console.log(data);

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
                <section className={'card-wrapper'}>
                  {data &&
                    data?.meals.map((meal: Meals, i: number) => {
                      return (
                        <Card
                          key={i}
                          animation={true}
                          category={category}
                          data={meal}
                        />
                      );
                    })}
                </section>
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
          <BottomMenu />
        </header>
      </div>
    </Router>
  );
}

export default App;
