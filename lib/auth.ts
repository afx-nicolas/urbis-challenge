import Router from 'next/router';
import axios from 'axios';
import { setCookie } from 'nookies';

import { Credentials } from '../types';

interface DataResponse {
  ok: boolean;
  response: {
    user: {
      name: string;
      email: string;
    };
    access_token: string;
  };
}

export const auth = async ({ email, password }: Credentials) => {
  const { data } = await axios.post<DataResponse>('/api/auth', {
    email,
    password,
  });

  if (!data.ok) {
    return false;
  }

  const { user, access_token } = data.response;

  const userData = {
    name: user.name,
    email: user.email,
  };

  setCookie(null, 'user', JSON.stringify(userData), {
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  setCookie(null, 'token', access_token, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return Router.push('/beneficios');
};
