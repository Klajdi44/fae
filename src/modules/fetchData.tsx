import { useState, useEffect } from 'react';

type Meals = {
  strMeal: string;
  strMealThumb: string;
  idMeal?: number;
};
// type Data = {
//   meals: Meals[];
// };

export default function fetchData(url: string) {
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | any>(null); //:Data
  const [loadingState, setLoadingState] = useState<
    'idle' | 'loading' | 'loaded' | null
  >('idle');

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          setLoadingState(null);
          throw new Error('something went wrong');
        }
        setLoadingState('loading');
        return response.json();
      })
      .then(apiData => {
        setError(null);
        setLoadingState('loaded');
        setData(apiData);
      })
      .catch(err => {
        setData(null);
        setLoadingState(null);
        setError(err.message);
      });
    return () => console.log('aborted');
  }, [url]);
  return {
    data,
    error,
    loadingState,
  };
}
