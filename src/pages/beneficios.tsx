import { useCallback, useEffect, useState } from 'react';
import { NextPageContext } from 'next';
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

interface BeneficiosProps {
  benefits: Benefit[];
  page: number;
  maxPages: number;
}

export default function Beneficios({
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
          </div>
        </main>
        <Pagination page={page} maxPages={maxPages} />
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
    const itemsPerPage = 10;
    const { data } = await api.post(
      `/incentive/search?page=${page || 1}&qtd=${itemsPerPage}&paginable=true`
    );

    return {
      props: {
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
