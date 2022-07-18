import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';
import { AccountCircle, NotificationImportant } from '../../components/Icons';
import { UserContext } from '../../contexts/UserContext';
import SearchBar from '../SearchBar';
import Notifications from '../Notifications';

import Logo from '/public/logo.png';

interface HeaderProps {
  notifications: string[];
  handleModalOpen: () => void;
  setNotificationForId: (id: string) => void;
}

export default function Header({
  notifications,
  handleModalOpen,
  setNotificationForId,
}: HeaderProps) {
  const { name } = useContext(UserContext);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const closeNotifications = () => setIsNotificationsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href="/beneficios" passHref>
            <a className={styles.logoLink}>
              <Image
                className={styles.logo}
                src={Logo}
                alt="Logo Clube Staging"
              />
            </a>
          </Link>
        </div>
        <SearchBar />
        <div className={styles.profile}>
          <span>Olá {name}!</span>
          <div className={styles.profileButtonsWrapper}>
            <div className={styles.profileButton}>
              <button
                onClick={() => setIsNotificationsOpen((state) => !state)}
                className={styles.notificationButton}
              >
                <NotificationImportant />
                {notifications.length > 0 && (
                  <span className={styles.notificationCount}>
                    {notifications.length > 99 ? '99+' : notifications.length}
                  </span>
                )}
              </button>
              {isNotificationsOpen && (
                <Notifications
                  notifications={notifications}
                  handleModalOpen={handleModalOpen}
                  setNotificationForId={setNotificationForId}
                  closeNotifications={closeNotifications}
                />
              )}
            </div>
            <a href="#" className={styles.profileButton}>
              <AccountCircle />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
