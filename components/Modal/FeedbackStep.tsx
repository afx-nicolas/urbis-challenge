import React, { useState } from 'react';

import styles from './Modal.module.css';

import { Label } from '../Icons';
import Button from '../Button';
import { BenefitFeedback } from '../../types';

interface FeedbackStepProps {
  goToStep: (step: number) => void;
  handleFeedbackChange: (feedback: BenefitFeedback) => void;
}

export default function FeedbackStep({
  goToStep,
  handleFeedbackChange,
}: FeedbackStepProps) {
  const [rating, setRating] = useState<BenefitFeedback['rating']>(undefined);
  const [commentary, setCommentary] = useState('');

  function handleSubmit() {
    handleFeedbackChange({ rating, feedback: commentary });
    goToStep(3);
  }

  function handleRatingChange(event: React.FormEvent<HTMLFormElement>) {
    const { value } = event.target as HTMLInputElement;
    setRating(+value as BenefitFeedback['rating']);
  }

  function handleCommentaryChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setCommentary(event.target.value);
  }

  return (
    <>
      <Label />
      <span className={styles.title}>
        Que bom que você aproveitou este benefício!
      </span>
      <p className={styles.description}>
        Esse benefício foi relevante para que você permanecesse como cliente?
      </p>
      <form className={styles.form} onChange={handleRatingChange}>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="irrelevant"
          name="rating"
          value={1}
        />
        <label className={styles.radioLabel} htmlFor="irrelevant">
          Irrelevante
        </label>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="little-relevant"
          name="rating"
          value={2}
        />
        <label className={styles.radioLabel} htmlFor="little-relevant">
          Pouco relevante
        </label>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="indifferent"
          name="rating"
          value={3}
        />
        <label className={styles.radioLabel} htmlFor="indifferent">
          Indiferente
        </label>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="relevant"
          name="rating"
          value={4}
        />
        <label className={styles.radioLabel} htmlFor="relevant">
          Relevante
        </label>
        <input
          className={[styles.srOnly, styles.radio].join(' ')}
          type="radio"
          id="very-relevant"
          name="rating"
          value={5}
        />
        <label className={styles.radioLabel} htmlFor="very-relevant">
          Muito relevante
        </label>
      </form>
      <label className={styles.commentaryLabel} htmlFor="commentary">
        Gostaria de deixar algum comentário? (opcional)
      </label>
      <textarea
        className={styles.commentary}
        name="commentary"
        id="commentary"
        placeholder="Digite aqui"
        value={commentary}
        onChange={handleCommentaryChange}
      ></textarea>
      <div className={styles.buttonGroup}>
        <Button onClick={() => goToStep(1)} variant="secondary">
          Voltar
        </Button>
        <Button onClick={handleSubmit} variant="primary" disabled={!rating}>
          Próximo
        </Button>
      </div>
    </>
  );
}
