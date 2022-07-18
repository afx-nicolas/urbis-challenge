import React, { useState } from 'react';

import styles from './SearchBar.module.css';
import { Search } from '../Icons';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  function handleSearchByInput(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && search.length > 1) {
      window.location.href = '/beneficios?search=' + encodeURIComponent(search);
    }
  }

  function handleSearchByClick() {
    if (search.length > 1) {
      window.location.href = '/beneficios?search=' + encodeURIComponent(search);
    }
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarWrapper}>
        <input
          className={styles.searchBar}
          type="search"
          name="search"
          id="search"
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchByInput}
        />
        <button
          onClick={handleSearchByClick}
          className={styles.searchIconWrapper}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}
