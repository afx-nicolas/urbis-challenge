import styles from './Modal.module.css';

import { Insignia } from '../Icons';
import Button from '../Button';

interface SuccessStepProps {
  submitFeedback: () => void;
}

export default function SuccessStep({ submitFeedback }: SuccessStepProps) {
  return (
    <>
      <div>
        <Insignia />
      </div>
      <span className={styles.title}>Sucesso!</span>
      <p className={styles.description}>
        Sua resposta foi registrada com sucesso. Agradecemos muito por você ter
        dedicado esse tempo para nos ajudar a tornar nosso clube cada vez
        melhor.
      </p>
      <div className={styles.buttonContainer}>
        <Button onClick={submitFeedback} variant="primary">
          Fechar
        </Button>
      </div>
    </>
  );
}
