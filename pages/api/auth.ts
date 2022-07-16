import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

import { api } from '../../services/api';

type RequestBody = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password }: RequestBody = req.body;

  try {
    const { data } = await api.post('/auth/user', {
      email,
      password,
      whitelabelId: '77',
    });

    res.status(200).json({ ok: true, response: data });
  } catch (e) {
    res.status(200).json({ ok: false, data: {} });
  }
}
