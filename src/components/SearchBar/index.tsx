import styles from './SearchBar.module.css';
import { Search } from '../Icons';

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarWrapper}>
        <input
          className={styles.searchBar}
          type="search"
          name="search"
          id="search"
          placeholder="Buscar"
          onKeyDown={(e) => console.log(e)}
        />
        <button className={styles.searchIconWrapper}>
          <Search />
        </button>
      </div>
    </div>
  );
}
