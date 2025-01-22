/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiFactory } from '@/shared/libs';
import { SearchQueryParams } from '@/shared/types';
import { creteSearchParams } from '@/shared/util';
import { useQuery } from 'react-query';

interface QueryProps {
  queryParams: SearchQueryParams;
  enabled: boolean;
}

export const useGetDefaultQuery = <T>({
  queryParams,
  enabled = true,
}: QueryProps) => {
  const Params = creteSearchParams(queryParams);
  const api = ApiFactory('token');

  return useQuery<T>({
    queryKey: ['default-get-query'],
    queryFn: () => {
      return api
        .get<T>(`query-route${Params}`)
        .then((response) => response.data);
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    enabled,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
