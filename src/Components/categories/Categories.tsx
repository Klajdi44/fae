import React, { useEffect } from 'react';
import CategoriesCard from '../categoriesCard/CategoriesCard';
import fetchData from '../../modules/fetchData';
import gsap from 'gsap';

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
  useEffect(() => {
    gsap.fromTo(
      '.categories-card',
      { opacity: 0, x: -100 + '%' },
      {
        opacity: 1,
        x: 0 + '%',
        duration: 1,
        ease: 'back.out(1.3)',
        stagger: 0.4,
        delay: 1,
      }
    );
  }, []);

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
