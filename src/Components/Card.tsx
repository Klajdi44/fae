import React, { useEffect } from 'react';
import gsap from 'gsap';

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
      { opacity: 0, y: 100 + '%' },
      {
        opacity: 1,
        y: 0 + '%',
        stagger: 0.3,
        duration: 1,
        delay: 0.3,
        ease: 'back.out(1.3)',
      }
    );
    return () => console.log('returned');
  }, []);

  return (
    <section className='card-wrapper'>
      {props.data.map(meal => {
        return (
          <article className='card' key={meal.strMeal}>
            <img src={meal.strMealThumb} alt='dish' />
            <h3>{meal.strMeal}</h3>
          </article>
        );
      })}
    </section>
  );
}
