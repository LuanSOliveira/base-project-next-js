import { showToast } from '@/shared/functions';
import { ApiFactory } from '@/shared/libs';
import { IAxioDataError } from '@/shared/types';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

interface QueryProps {
  setLoading?: (value: boolean) => void;
  routerBack?: boolean;
}

export const usePostDefaultQuery = <T>({
  setLoading,
  routerBack = true,
}: QueryProps) => {
  const api = ApiFactory('token');
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (postDefaultQueryData: T) => {
      return api
        .post('query-route', postDefaultQueryData)
        .then((response) => response.data);
    },
    onSuccess: () => {
      showToast({ message: `Cadastro realizado com sucesso.` });
      if (routerBack) {
        router.back();
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
    onPostDefaultQueryData: (postDefaultQueryData: T) => {
      return mutation.mutate(postDefaultQueryData);
    },
    isLoading: mutation.isLoading,
  };
};
