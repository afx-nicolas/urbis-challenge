import Image from 'next/image';

import styles from '../styles/Beneficios.module.css';
import { Benefit } from '../types';

export default function Card({
  image,
  title,
  description,
  discount,
  rules,
  isOnline,
  url,
}: Benefit) {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.cardImageWrapper}>
        <Image
          className={styles.cardImage}
          src={image}
          alt="Profile picture"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>
          {title} <span className={styles.badge}>{discount}</span>
        </h3>
        <small>{description}</small>
        <p className={styles.cardParagraph}>{rules}</p>
        {isOnline ? (
          <a
            href={url!}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.claimButton}
          >
            Resgatar
          </a>
        ) : (
          <a className={styles.expiredButton}>Expirado</a>
        )}
      </div>
    </div>
  );
}
