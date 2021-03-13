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
    // abort controller
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
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
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setData(null);
          setLoadingState(null);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return {
    data,
    error,
    loadingState,
  };
}
