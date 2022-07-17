import styles from './Notifications.module.css';

export default function Notifications() {
  return (
    <div className={styles.container}>
      <span className={styles.header}>Notificações</span>
      <div className={styles.notificationsWrapper}>
        <div className={styles.notification}>
          <span className={styles.notificationTitle}>
            Você usou um benefício? conta para a gente!
          </span>
          <span className={styles.notificationBody}>
            Você acessou o site de um parceiro, gostaríamos de saber se você
            usou algum benefício.{' '}
            <span className={styles.modalOpen}>responder questionário</span>
          </span>
        </div>
        <div className={styles.notification}>
          <span className={styles.notificationTitle}>
            Você usou um benefício? conta para a gente!
          </span>
          <span className={styles.notificationBody}>
            Você acessou o site de um parceiro, gostaríamos de saber se você
            usou algum benefício.{' '}
            <span className={styles.modalOpen}>responder questionário</span>
          </span>
        </div>
        <div className={styles.notification}>
          <span className={styles.notificationTitle}>
            Você usou um benefício? conta para a gente!
          </span>
          <span className={styles.notificationBody}>
            Você acessou o site de um parceiro, gostaríamos de saber se você
            usou algum benefício.{' '}
            <span className={styles.modalOpen}>responder questionário</span>
          </span>
        </div>
      </div>
    </div>
  );
}
