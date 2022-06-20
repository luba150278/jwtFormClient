import axios from 'axios';
import api from './api';

const instance = axios.create({
  baseURL: `${api.baseURL}api`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`, // к этому мы ещё вернёмся как-нибудь потом
  },
});

export default instance;
