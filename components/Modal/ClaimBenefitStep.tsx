import React, { useContext, useState } from 'react';

import { BenefitFeedback } from '../../types';

import styles from './Modal.module.css';

import { Gift } from '../Icons';
import Button from '../Button';
import { UserContext } from '../../contexts/UserContext';

interface ClaimBenefitStepProps {
  date: string;
  goToStep: (step: number) => void;
  handleFeedbackChange: (feedback: BenefitFeedback) => void;
  answerLater: () => void;
}

export default function ClaimBenefitStep({
  date,
  goToStep,
  handleFeedbackChange,
  answerLater,
}: ClaimBenefitStepProps) {
  const [isBenefitUsed, setIsBenefitUsed] = useState<boolean | null>(null);
  const { name } = useContext(UserContext);

  function handleBenefitIsUsedChange(event: React.FormEvent<HTMLFormElement>) {
    setIsBenefitUsed(!!+(event.target as HTMLInputElement).value);
  }

  function handleSubmit() {
    if (isBenefitUsed) {
      handleFeedbackChange({ hasUsedBenefit: true });
      goToStep(2);
      return;
    }

    handleFeedbackChange({ hasUsedBenefit: false });
  }

  return (
    <>
      <div>
        <Gift />
      </div>
      <span className={styles.title}>Oba!</span>
      <span className={styles.title}>{name}, você usou um benefício?</span>
      <p className={styles.description}>
        Identificamos que você acessou o site do Parceiro Tal no dia {date}.
        Você pode nos dizer se utilizou um benefício na ocasião?
      </p>
      <form
        onChange={handleBenefitIsUsedChange}
        className={styles.verticalForm}
      >
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="yes-used-benefit"
          name="used-benefit"
          value={1}
        />
        <label className={styles.radioLabel} htmlFor="yes-used-benefit">
          Sim. Eu utilizei um benefício
        </label>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="no-used-benefit"
          name="used-benefit"
          value={0}
        />
        <label className={styles.radioLabel} htmlFor="no-used-benefit">
          Não. Eu não utilizei um benefício
        </label>
      </form>
      <div className={styles.buttonGroup}>
        <Button onClick={answerLater} variant="secondary">
          Responder depois
        </Button>
        <Button
          onClick={handleSubmit}
          variant="primary"
          disabled={isBenefitUsed === null}
        >
          {isBenefitUsed ? 'Próximo' : 'Salvar resposta'}
        </Button>
      </div>
    </>
  );
}
