import { useEffect, useState } from 'react';

import { BenefitFeedback } from '../../types';

import styles from './Modal.module.css';

import ClaimBenefitStep from './ClaimBenefitStep';
import FeedbackStep from './FeedbackStep';
import SuccessStep from './SuccessStep';

interface ModalProps {
  closeModal: () => void;
  notification: string;
  removeNotification: () => void;
}

export default function Modal({
  closeModal,
  notification,
  removeNotification,
}: ModalProps) {
  const [feedback, setFeedback] = useState({} as BenefitFeedback);
  const [answerLater, setAnswerLater] = useState(false);
  const [step, setStep] = useState(1);
  const [date] = new Date().toLocaleString('pt-BR').split(' ');

  function handleFeedbackChange(feedback: BenefitFeedback) {
    setFeedback((state) => ({ ...state, ...feedback }));
  }

  function submitFeedback() {
    removeNotification();
    closeModal();
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (answerLater) {
      closeModal();
    }
  }, [answerLater, closeModal]);

  useEffect(() => {
    if (feedback.hasUsedBenefit === false) {
      removeNotification();
      closeModal();
    }
  }, [feedback, closeModal, removeNotification]);

  function handleDisplayStep() {
    switch (step) {
      case 1:
        return (
          <ClaimBenefitStep
            date={date}
            goToStep={setStep}
            handleFeedbackChange={handleFeedbackChange}
            answerLater={() => setAnswerLater(true)}
          />
        );
      case 2:
        return (
          <FeedbackStep
            goToStep={setStep}
            handleFeedbackChange={handleFeedbackChange}
          />
        );
      case 3:
        return <SuccessStep submitFeedback={submitFeedback} />;
      default:
        throw new Error('Invalid Modal step');
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>{handleDisplayStep()}</div>
    </div>
  );
}
