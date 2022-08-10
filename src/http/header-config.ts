import { AxiosRequestHeaders } from 'axios';

export const headersConfig: AxiosRequestHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Access-Control-Allow-Origin': process.env.CLIENT_URL2 || 'http://localhost:3000/',
  SameSite: 'None',
  Secure: true,
};
