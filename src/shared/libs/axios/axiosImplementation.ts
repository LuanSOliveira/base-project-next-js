import { getApiUrl } from '@/shared/constants';
import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: getApiUrl(),
  headers: {
    // Authorization: `Bearer ${getToken()}`
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      if (window) {
        window.location.href = 'route';
      }
    }
    return Promise.reject(error);
  },
);

export default instance;

// const router = useRouter();
