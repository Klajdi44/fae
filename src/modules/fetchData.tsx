import { useState, useEffect } from 'react';

export default function fetchData(url: string) {
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | { meals: {}[] }[] | []>([]);
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
      .then(data => {
        setError(null);
        setLoadingState('loaded');
        setData(data);
      })
      .catch(err => {
        setData(null);
        setLoadingState(null);
        setError(err.message);
      });
    return () => console.log('returned');
  }, []);
  return {
    data,
    error,
    loadingState,
  };
}
