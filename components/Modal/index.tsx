import ClaimBenefitStep from './ClaimBenefitStep';
import styles from './Modal.module.css';

export default function Modal() {
  const [date] = new Date().toLocaleString('pt-BR').split(' ');

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <ClaimBenefitStep date={date} />
      </div>
    </div>
  );
}
