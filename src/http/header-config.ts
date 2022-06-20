export const headersConfig: AxiosRequestHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Access-Control-Allow-Origin': process.env.CLIENT_URL || 'http://localhost:3000/',
  SameSite: 'None',
  Secure: true,
};