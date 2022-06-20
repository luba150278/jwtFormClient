/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import getErrorMessage from '../functions/getErrorMessage';
import getNotify from '../functions/notify';
import { AuthResponse } from '../models/response/AuthResponse';

export const headersConfig = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Access-Control-Allow-Origin': 'https://jwt-form.netlify.app/',
  SameSite: 'None',
  Secure: true,
};

const $api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_API_URL}api`,
  headers: headersConfig,
});
$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const configModify = config;
  if (configModify.headers && localStorage.getItem('token')) {
    configModify.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // configModify.headers['x-access-token'] = `${localStorage.getItem('token')}`;
    return configModify;
  }
  return configModify;
});

$api.interceptors.response.use(
  (config: AxiosResponse) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_API_URL}api/refresh`, {
          withCredentials: true,
          headers: headersConfig,
        });
        localStorage.setItem('token', response.data.accessToken);
        return await $api.request(originalRequest);
      } catch (e) {
        getNotify(getErrorMessage(e));
      }
    }
    throw error;
  }
);

export default $api;
