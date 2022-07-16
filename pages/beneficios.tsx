import { NextPageContext } from 'next';
import { destroyCookie, parseCookies } from 'nookies';

import { api } from '../services/api';
import { Benefit } from '../types';

import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Beneficios.module.css';

interface BeneficiosProps {
  user: {
    name: string;
    email: string;
  };
  benefits: Benefit[];
}

export default function Beneficios({ user, benefits }: BeneficiosProps) {
  return (
    <>
      <Header name={user.name} email={user.email} />
      <main className={styles.main}>
        <div className={styles.container}>
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              id={benefit.id}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
              discount={benefit.discount}
              rules={benefit.rules}
              isOnline={benefit.isOnline}
              url={benefit.url}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { token } = parseCookies(ctx, 'token');
  const { user } = parseCookies(ctx, 'user');
  const { page } = ctx.query;

  if (!token || !user) {
    destroyCookie(ctx, 'token');
    destroyCookie(ctx, 'user');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (page && isNaN(+page!)) {
    return {
      redirect: {
        destination: '/beneficios',
        permanent: false,
      },
    };
  }

  try {
    const { data } = await api.post(
      `/incentive/search?page=${page || 1}&qtd=10&paginable=true`
    );

    return {
      props: {
        user: JSON.parse(user),
        benefits: data.data.data,
      },
    };
  } catch {
    destroyCookie(ctx, 'token');
    destroyCookie(ctx, 'user');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
