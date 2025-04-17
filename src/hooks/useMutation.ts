import {useState} from 'react';
import BaseApi from '../services/base_api';
import {AxiosError} from 'axios';

interface MutationOptions {
  url: string;
  payload: any;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

const useMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const baseApi = new BaseApi();

  const mutate = async ({
    url,
    payload,
    onSuccess,
    onError,
  }: MutationOptions) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await baseApi.post(url, payload);
      onSuccess?.(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        onError?.(err.response?.data as Error);
        setError(err.response?.data as Error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading, mutate, error};
};

export default useMutation;
