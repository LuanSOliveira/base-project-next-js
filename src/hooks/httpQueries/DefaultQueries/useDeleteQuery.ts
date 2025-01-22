/* eslint-disable @typescript-eslint/no-explicit-any */

import { showToast } from '@/shared/functions';
import { ApiFactory } from '@/shared/libs';
import { IAxioDataError } from '@/shared/types';
import { AxiosError } from 'axios';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from 'react-query';

interface QueryProps {
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<any, unknown>>;
  setModal?: (value: boolean) => void;
  setLoading?: (value: boolean) => void;
}

export const useDeleteDefaultQuery = ({
  refetch,
  setModal,
  setLoading,
}: QueryProps) => {
  const api = ApiFactory('token');
  const mutation = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return api.delete(`query-route/${id}`);
    },
    onSuccess: () => {
      refetch();
      showToast({ message: 'Exclusão realizada com sucesso.' });
      if (setModal) {
        setModal(false);
      }
      if (setLoading) {
        setLoading(false);
      }
    },
    onError: (err: AxiosError<unknown, unknown>) => {
      const dataErr: IAxioDataError = err as IAxioDataError;
      showToast({ message: `${dataErr.response.data.message}`, type: 'error' });
      if (setLoading) {
        setLoading(false);
      }
    },
  });

  return {
    onDeleteDefaultQueryData: (id: string) => {
      return mutation.mutate({ id });
    },
    isLoading: mutation.isLoading,
  };
};
