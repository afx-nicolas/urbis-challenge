import styles from './Card.module.css';
import { Benefit } from '../../types';
import Button from '../Button';

interface CardProps extends Benefit {
  handleModalOpen: () => void;
}

export default function Card({
  image,
  title,
  description,
  discount,
  rules,
  isOnline,
  url,
  handleModalOpen,
}: CardProps) {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.cardImageWrapper}>
        {/* eslint-disable-next-line */}
        <img
          className={styles.cardImage}
          src={image}
          alt={title}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>
          {title} <span className={styles.badge}>{discount}</span>
        </h3>
        <small>{description}</small>
        <p className={styles.cardParagraph}>{rules}</p>
        {isOnline ? (
          <Button
            className={styles.claimButton}
            href={url!}
            target="_blank"
            isLink={true}
            variant="primary"
            onClick={handleModalOpen}
          >
            Resgatar
          </Button>
        ) : (
          <Button
            className={styles.expiredButton}
            isLink={false}
            variant={'disabled'}
          >
            Expirado
          </Button>
        )}
      </div>
    </div>
  );
}
