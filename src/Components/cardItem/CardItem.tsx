import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchData from '../../modules/fetchData';
import Loader from '../loader/LoaderComponent';

function CardItem(props: any): JSX.Element {
  // type RootObject = {
  //   meals: Meal[];
  // };

  type Meal = {
    idMeal: string | null;
    strMeal: string | null;
    strDrinkAlternate?: any;
    strCategory: string | null;
    strArea: string | null;
    strInstructions: string | null;
    strMealThumb: string | null;
    strTags: string | null;
    strYoutube: string | null;
    strIngredient1?: string | null;
    strIngredient2?: string | null;
    strIngredient3?: string | null;
    strIngredient4?: string | null;
    strIngredient5?: string | null;
    strIngredient6?: string | null;
    strIngredient7?: string | null;
    strIngredient8?: string | null;
    strIngredient9?: string | null;
    strIngredient10?: string | null;
    strIngredient11?: string | null;
    strIngredient12?: string | null;
    strIngredient13?: string | null;
    strIngredient14?: string | null;
    strIngredient15?: string | null;
    strIngredient16?: any;
    strIngredient17?: any;
    strIngredient18?: any;
    strIngredient19?: any;
    strIngredient20?: any;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strMeasure16?: any;
    strMeasure17?: any;
    strMeasure18?: any;
    strMeasure19?: any;
    strMeasure20?: any;
    strSource?: any;
    strImageSource?: any;
    strCreativeCommonsConfirmed?: any;
    dateModified?: any;
  };
  // .replace(/\n/g, '')

  const { id } = useParams();

  const { data, loadingState, error } = fetchData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const ingredients = [];
  let filteredIgredients = [];
  const meal: any = data && data?.meals[0];

  //loop through the igredients and the measures and return them together
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      let singleIngredient =
        meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`];
      ingredients.push(singleIngredient);
    }
  }

  if (ingredients.length > 0) {
    filteredIgredients = ingredients.filter(
      el => el !== 'null null' && el != ' '
    );
    console.log(filteredIgredients);
  }
  return (
    <>
      {loadingState === 'idle' && <Loader />}
      {error && (
        <div style={{ color: '#000' }}>
          {' '}
          Sorry, we couldn't find the dish. Please try again
        </div>
      )}
      {data && (
        <section className='card-item-wrapper'>
          <article className='back-button-wrapper'>
            <Link to='/'>
              <i className='fas fa-chevron-left'></i>
            </Link>
          </article>

          <article className='card-item'>
            <div className='wrapper-fix'>
              <div className='img-section'>
                <img src={meal.strMealThumb} alt='dish' />
                <h1>{meal.strMeal}</h1>
              </div>

              <div className='category-area'>
                <span>{meal.strCategory}</span>
                <span>{meal.strArea}</span>
              </div>

               <div className='tags'>
                {meal?.strTags?.split(',').map((el: string | null) => (
                  <span>#{el}</span>
                ))}
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
}

export default CardItem;
