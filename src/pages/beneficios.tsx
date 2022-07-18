import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { destroyCookie, parseCookies } from 'nookies';

import { api } from '../services/api';
import { Benefit } from '../types';
import { UserProvider } from '../contexts/UserContext';

import PageHead from '../components/PageHead';
import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Beneficios.module.css';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import Button from '../components/Button';

interface BeneficiosProps {
  isSearch: boolean;
  benefits: Benefit[];
  page: number;
  maxPages: number;
}

export default function Beneficios({
  isSearch,
  benefits,
  page,
  maxPages,
}: BeneficiosProps) {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [notificationForId, setNotificationForId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      const notificationsFromStorage =
        window.localStorage.getItem('notifications');

      if (notificationsFromStorage) {
        setNotifications(JSON.parse(notificationsFromStorage));
      }
    }
  }, []);

  useEffect(() => {
    if (window !== undefined && notifications.length > 0) {
      window.localStorage.setItem(
        'notifications',
        JSON.stringify(notifications)
      );
    }
  }, [notifications]);

  const handleNewNotification = (id: string) => {
    if (notifications.includes(id)) return;
    setNotifications((state) => [...state, id]);
  };

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNotificationRemove = () => {
    setNotifications((state) =>
      state.filter((notification) => notification !== notificationForId)
    );
    setNotificationForId('');
  };

  return (
    <UserProvider>
      <PageHead title="Benefícios | Clube Staging">
        <Header
          notifications={notifications}
          handleModalOpen={handleModalOpen}
          setNotificationForId={setNotificationForId}
        />
        <main className={styles.main}>
          <div className={styles.container}>
            {isSearch && (
              <Link href="/beneficios" passHref>
                <Button className={styles.goBack} variant="primary" isLink>
                  Inicio
                </Button>
              </Link>
            )}
            {benefits.length === 0 ? (
              <span className={styles.noResults}>
                Nenhum resultado encontrado.
              </span>
            ) : (
              <>
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
                    handleNewNotification={handleNewNotification}
                    handleModalOpen={handleModalOpen}
                  />
                ))}
              </>
            )}
          </div>
        </main>
        {maxPages > 1 && <Pagination page={page} maxPages={maxPages} />}
        {isModalOpen && (
          <Modal
            closeModal={handleModalClose}
            notification={notificationForId}
            removeNotification={handleNotificationRemove}
          />
        )}
      </PageHead>
    </UserProvider>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { token } = parseCookies(ctx, 'token');
  const { user } = parseCookies(ctx, 'user');
  const { page, search } = ctx.query;

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

  // When user is searching
  if (search) {
    try {
      const { data } = await api.post('/incentive/search?paginable=false');
      const searchString =
        typeof search === 'string' ? search : search.join(' ');

      const filteredBenefits = data.data.data.filter((benefit: Benefit) => {
        return RegExp(searchString.replace(/[^\w\s]/gi, ''), 'i').test(
          benefit.title
        );
      });

      return {
        props: {
          isSearch: true,
          benefits: filteredBenefits,
          page: 1,
          maxPages: 1,
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

  try {
    const itemsPerPage = 10;
    const { data } = await api.post(
      `/incentive/search?page=${page || 1}&qtd=${itemsPerPage}&paginable=true`
    );

    return {
      props: {
        isSearch: false,
        benefits: data.data.data,
        page: page || 1,
        maxPages: Math.ceil(data.data.totalCount / itemsPerPage),
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
