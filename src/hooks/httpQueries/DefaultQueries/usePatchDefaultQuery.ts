import { showToast } from '@/shared/functions';
import { ApiFactory } from '@/shared/libs';
import { IAxioDataError } from '@/shared/types';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

interface QueryProps {
  id: string;
  setLoading?: (value: boolean) => void;
  routerBack?: boolean;
}

export const usePatchDefaultQuery = <T>({
  id,
  setLoading,
  routerBack = true,
}: QueryProps) => {
  const api = ApiFactory('token');
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (patchDefaultQueryData: T) => {
      return api
        .patch(`query-route/${id}`, patchDefaultQueryData)
        .then((response) => response.data);
    },
    onSuccess: () => {
      showToast({ message: `Atualização realizada com sucesso.` });
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
    onPatchDefaultQueryData: (patchDefaultQueryData: T) => {
      return mutation.mutate(patchDefaultQueryData);
    },
    isLoading: mutation.isLoading,
  };
};
