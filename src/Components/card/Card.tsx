import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

type Meals = {
  strMeal: string;
  strMealThumb: string;
  idMeal?: number;
};

type Props = {
  data: Meals[];
};
export default function Card(props: Props): JSX.Element {
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { opacity: 0.1, y: 100 + '%' },
      {
        opacity: 1,
        y: 0 + '%',
        stagger: 0.01,
        duration: 1,

        ease: 'back.out(1.3)',
      }
    );
  }, []);

  return (
    <section className='card-wrapper'>
      {props.data.map(meal => {
        return (
          <Link to={`/CardItem/${meal.idMeal}`} key={meal.strMeal}>
            <article className='card'>
              <img
                loading='lazy'
                src={meal.strMealThumb}
                alt='dish'
                width='200'
                height='200'
              />
              <h3>{meal.strMeal}</h3>
            </article>
          </Link>
        );
      })}
    </section>
  );
}
