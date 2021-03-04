import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../modules/fetchData';
import Loader from '../loader/LoaderComponent';

function CardItem(props: any): JSX.Element {
  console.log('hi');
  type RootObject = {
    meals: Meal[];
  };

  type Meal = {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate?: any;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strIngredient16?: any;
    strIngredient17?: any;
    strIngredient18?: any;
    strIngredient19?: any;
    strIngredient20?: any;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
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
        <div style={{ color: '#000' }}>
          {data.meals[0].strMeal}
          <div style={{ color: '#000' }}>this is the {id}</div>
        </div>
      )}
    </>
  );
}

export default CardItem;
