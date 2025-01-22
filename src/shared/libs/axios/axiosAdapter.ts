import { getApiUrl } from '@/shared/constants';
import instance from './axiosImplementation';
import axios2, { AxiosError, AxiosResponse } from 'axios';
// import { removeCookieAdapter } from '..';
// import { DecriptyToken } from '../cryptoJs';

export const axios = instance;

export const ApiFactory = (token?: string | null) => {
  // const decriptedToken = DecriptyToken(token);
  console.log(token);
  const axiosInstace = axios2.create({
    baseURL: getApiUrl(),
    headers: {
      Authorization: `Bearer ${'token'}`,
    },
  });

  axiosInstace.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      // if (error.response && error.response.status === 401) {
      //   if (window) {
      //     removeCookieAdapter(getAuthToken());
      //     window.location.href = 'login-route';
      //   }
      // }
      return Promise.reject(error);
    },
  );

  return {
    get: axiosInstace.get,
    post: axiosInstace.post,
    put: axiosInstace.put,
    patch: axiosInstace.patch,
    delete: axiosInstace.delete,
  };
};
