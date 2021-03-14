import React, { useEffect } from 'react';
import Burger from '../burger/Burger';
import gsap from 'gsap';

export default function Header(): JSX.Element {
  useEffect(() => {
    gsap.fromTo(
      '.header-wrapper',
      { clipPath: `circle(${18}px at ${9}px  ${40}px)`, opacity: 0 },
      {
        clipPath: `circle(${1000}px at ${9}px  ${40}px)`,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <>
      <div className='header-wrapper'>
        <h1>Discover Cook Eat Repeat</h1>
        {/* <img className='burger' src={Burger} alt='burger' /> */}
        <Burger />
      </div>
    </>
  );
}
