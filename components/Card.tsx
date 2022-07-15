import Image from 'next/image';

import styles from '../styles/Beneficios.module.css';

export default function Card() {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.cardImageWrapper}>
        <Image
          className={styles.cardImage}
          src="https://urbis-data-drive-api.s3.amazonaws.com/incentives/f075adda-8263-4f30-8710-f50d1324159e.png"
          alt="Profile picture"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>
          Academia Bem Estar <span className={styles.badge}>R$ 500,00</span>
        </h3>
        <small>DESCONTO NA ACADEMIA</small>
        <p className={styles.cardParagraph}>
          {`10% de Desconto em suas mensalidades!\r\n\r\nApresente seu
                virtual, juntamente com documento com foto e solicite o
                desconto. \r\n\r\nAPROVEITE!`}
        </p>
        <a href="#" className={styles.claimButton}>
          Resgatar
        </a>
      </div>
    </div>
  );
}
