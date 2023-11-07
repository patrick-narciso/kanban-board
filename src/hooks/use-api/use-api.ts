import { api } from '@/services/api';
import useSWR from 'swr';
import { useCallback } from 'react';
import { UseApiProps } from './use-api.types';

export const useApi = ({ method, path, body, service = api }: UseApiProps) => {
  const fetcher = useCallback(
    (url: string) => service[method](url, body).then((res) => res.data),
    [body, method, service]
  );

  const { data } = useSWR(path, fetcher, {
    suspense: true,
  });

  return { data };
};
