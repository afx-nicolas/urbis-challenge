import Link from 'next/link';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  maxPages: number;
}

export default function Pagination({ page, maxPages }: PaginationProps) {
  const remainingPages = maxPages - page;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {[...Array(remainingPages > 4 ? 9 : remainingPages + 5)].map(
          (_, index) => {
            const initialPageLink = page - 5;
            const offset = initialPageLink >= 0 ? initialPageLink : 0;

            return (
              <Link
                passHref
                key={index}
                href={{
                  pathname: '/beneficios',
                  query: { page: index + offset + 1 },
                }}
              >
                <a
                  className={
                    +page === index + offset + 1
                      ? [styles.link, styles.currentPage].join(' ')
                      : styles.link
                  }
                >
                  {index + offset + 1}
                </a>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
