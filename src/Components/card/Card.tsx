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
  category?: string;
  animation?: boolean;
};
export default function Card(props: Props): JSX.Element {
  useEffect(() => {
    props.animation &&
      gsap.fromTo(
        '.card',
        { opacity: 0, x: -100 + '%' },
        {
          opacity: 1,
          x: 0 + '%',
          duration: 0.7,
          ease: 'back.out(1.3)',
          stagger: 0.03,
        }
      );
  }, [props.data]);

  return (
    <section className='card-wrapper'>
      {props.data.map(meal => {
        return (
          <Link key={meal.strMeal} to={`/CardItem/${meal.idMeal}`}>
            <article key={meal.idMeal} className='card'>
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
