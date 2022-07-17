import { useContext } from 'react';

import styles from './Header.module.css';
import { AccountCircle, NotificationImportant } from '../../components/Icons';
import { UserContext } from '../../contexts/UserContext';
import SearchBar from '../SearchBar';

export default function Header() {
  const { name } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>Logo</span>
        <SearchBar />
        <div className={styles.profile}>
          <span>Olá {name}!</span>
          <div className={styles.profileButtonsWrapper}>
            <button className={styles.profileButton}>
              <NotificationImportant />
            </button>
            <a href="#" className={styles.profileButton}>
              <AccountCircle />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
