import axios from 'axios';
import { parseCookies } from 'nookies';

const { token } = parseCookies();

export const api = axios.create({
  baseURL: 'https://new-api.urbis.cc',
});

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
