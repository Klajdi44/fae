import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoaderComponent(): JSX.Element {
  return (
    <div className='loader'>
      <h1>Find the food you love</h1>
      <Loader type='Watch' color='#D6AA39' height={100} width={100} />
    </div>
  );
}
