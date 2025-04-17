import {useEffect, useMemo, useState} from 'react';
import BaseApi from '../services/base_api';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const baseApi = useMemo(() => new BaseApi(), []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await baseApi.get(url);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, [url, baseApi]);

  return {data, loading, error};
};

export default useFetch;
