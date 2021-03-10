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

  const ingredients: string[] = [];
  let filteredIgredients: string[] = [];
  const meal: any = data && data?.meals[0];
  const instructions = meal?.strInstructions.split('\n');
  const videoId = meal?.strYoutube;
  const videoLink = videoId && videoId.substring(videoId.indexOf('=') + 1);
  const tags = meal?.strTags?.split(',');
  const category = meal?.strCategory;
  const filteredTags = tags?.filter((tag: string) => !tag.includes(category));
  // console.log(meal);

  //loop through the igredients and the measures and return them together
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      let singleIngredient = `${meal[`strMeasure${i}`]}  ${
        meal[`strIngredient${i}`] && meal[`strIngredient${i}`].toLowerCase()
      }`;
      ingredients.push(singleIngredient);
    }
  }

  if (ingredients.length > 0) {
    filteredIgredients = ingredients
      .flat()
      .filter(
        el =>
          el !== 'null null' &&
          el !== 'null  null' &&
          el != '  ' &&
          el !== '   '
      );
    // console.log(filteredIgredients);
  }
  console.log(filteredIgredients);

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
                {tags &&
                  filteredTags.map((el: string | null) => (
                    <span key={el}>#{el}</span>
                  ))}
              </div>

              <div className='instructions '>
                <h1>Instructions</h1>

                {instructions.map((el: string) => (
                  <p key={Math.random()}>{el}</p>
                ))}
              </div>

              <div className='video-section'>
                {videoId && (
                  <iframe
                    // width='400'
                    height='315'
                    src={`https://www.youtube.com/embed/${videoLink}`}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <div className='ingredients-section'>
                <h1>Ingredients</h1>
                <ul>
                  {filteredIgredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <br />
                <br />
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
}

export default CardItem;
