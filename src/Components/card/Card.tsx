import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export type Meals = {
  strMeal: string;
  strMealThumb: string;
  idMeal?: number;
};

type Props = {
  data: Meals;
  category?: string;
  animation?: boolean;
  className?: string;
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
    <article key={props.data.idMeal} className={props.className}>
      <Link to={`/CardItem/${props.data.idMeal}`}>
        <article className='card'>
          <img
            loading='lazy'
            src={props.data.strMealThumb}
            alt='dish'
            width='200'
            height='200'
          />
          <h3>{props.data.strMeal}</h3>
        </article>
      </Link>
    </article>
  );
}
