import React, { useState, useEffect } from 'react';
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
import Favorites from '../Favorites/Favorites';

function App(): JSX.Element {
  const [category, setCategory] = useState<string>('Beef');
  const { data, error, loadingState } = fetchData(`
     https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const [inputValue, setInputValue] = useState<string>('');
  const [page, setPage] = useState(1);
  const [darkOn, setDarkOn] = useState(() => false);
  const isDarkModeOn = localStorage.getItem('darkMode');

  useEffect(() => {
    if (isDarkModeOn === 'true') {
      setDarkOn(true);
    }
  }, []);

  function handleDarkMode() {
    setDarkOn(prevMode => !prevMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkOn));
    console.log(darkOn, 'inside function');
    console.log(isDarkModeOn);
  }

  return (
    <Router>
      <div className={isDarkModeOn === 'true' ? 'dark App' : 'App'}>
        <header className='App-header'>
          <Switch>
            <Route exact path='/'>
              <Header setPage={setPage} />
              <Categories category={category} setCategory={setCategory} />
              {/* <small className='or'>or</small>
              <SearchByName /> */}

              {data === null ? (
                <LoaderComponent />
              ) : (
                <section className={'card-wrapper'}>
                  <small> Recipies: {data && data?.meals.length}</small>
                  {data &&
                    data?.meals.map((meal: Meals, i: number) => {
                      return (
                        <Card
                          key={i}
                          animation={true}
                          category={category}
                          data={meal}
                          className='card-home-wrapper'
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
            <Route path='/Favorites'>
              <Favorites />
            </Route>
          </Switch>
          <BottomMenu
            page={page}
            setPage={setPage}
            darkOn={darkOn}
            setDarkOn={setDarkOn}
            handleDarkMode={handleDarkMode}
            isDarkModeOn={isDarkModeOn}
          />
        </header>
      </div>
    </Router>
  );
}

export default App;
