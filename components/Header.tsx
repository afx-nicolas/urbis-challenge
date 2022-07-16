import styles from '../styles/Beneficios.module.css';
import {
  AccountCircle,
  NotificationImportant,
  Search,
} from '../components/Icons';

interface HeaderProps {
  name: string;
  email?: string;
}

export default function Header({ name, email }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>Logo</span>
        <div className={styles.searchContainer}>
          <div className={styles.searchBarWrapper}>
            <input
              className={styles.searchBar}
              type="search"
              name="search"
              id="search"
              placeholder="Buscar"
            />
            <div className={styles.searchIconWrapper}>
              <Search />
            </div>
          </div>
        </div>
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
