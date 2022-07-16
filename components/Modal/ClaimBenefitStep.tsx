import { useContext, useState } from 'react';

import styles from './Modal.module.css';
import { Gift } from '../Icons';
import Button from '../Button';
import { UserContext } from '../../contexts/UserContext';

interface ClaimBenefitStepProps {
  date: string;
}

export default function ClaimBenefitStep({ date }: ClaimBenefitStepProps) {
  const [isBenefitUsed, setIsBenefitUsed] = useState<boolean | null>(null);
  const { name } = useContext(UserContext);

  return (
    <>
      <Gift />
      <span className={styles.title}>Oba!</span>
      <span className={styles.title}>{name}, você usou um benefício?</span>
      <p className={styles.description}>
        Identificamos que você acessou o site do Parceiro Tal no dia {date}.
        Você pode nos dizer se utilizou um benefício na ocasião?
      </p>
      <form className={styles.verticalForm}>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="yes-used-benefit"
          name="used-benefit"
          onChange={() => setIsBenefitUsed(true)}
        />
        <label className={styles.radioLabel} htmlFor="yes-used-benefit">
          Sim. Eu utilizei um benefício
        </label>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="no-used-benefit"
          name="used-benefit"
          onChange={() => setIsBenefitUsed(false)}
        />
        <label className={styles.radioLabel} htmlFor="no-used-benefit">
          Não. Eu não utilizei um benefício
        </label>
      </form>
      <div className={styles.buttonGroup}>
        <Button variant="secondary">Responder depois</Button>
        <Button variant="primary" disabled={isBenefitUsed === null}>
          {isBenefitUsed ? 'Próximo' : 'Salvar resposta'}
        </Button>
      </div>
    </>
  );
}
