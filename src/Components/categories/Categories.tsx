import React from 'react';
import fetchData from '../../modules/fetchData';

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

type CategoryTypes = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};
type CategoryProps = {
  categories: CategoryTypes[];
};

// https://www.themealdb.com/api/json/v1/1/categories.php
function Categories(props: Props): JSX.Element {
  const { data: categoryData, loadingState, error } = fetchData(
    ' https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  return (
    <section className='categories-wrapper'>
      <small> Select a category</small>
      <article className='categories-card-wrapper'>
        {categoryData !== null &&
          categoryData.categories.map((foodCategory: CategoryTypes) => {
            return (
              <div
                key={foodCategory.strCategory}
                onClick={() => props.setCategory(foodCategory.strCategory)}
                className={
                  props.category === foodCategory.strCategory
                    ? 'categories-card selected'
                    : 'categories-card'
                }
              >
                <img
                  key={foodCategory.strCategoryThumb}
                  className='category-Img'
                  src={foodCategory.strCategoryThumb}
                  alt='category image'
                />
                <h3>{foodCategory.strCategory}</h3>
              </div>
            );
          })}
      </article>
    </section>
  );
}

export default Categories;
