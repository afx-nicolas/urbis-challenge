import styles from './Notifications.module.css';

interface NotificationsProps {
  notifications: string[];
  handleModalOpen: () => void;
  setNotificationForId: (id: string) => void;
  closeNotifications: () => void;
}

export default function Notifications({
  notifications,
  handleModalOpen,
  setNotificationForId,
  closeNotifications,
}: NotificationsProps) {
  function modalOpenForId(id: string) {
    closeNotifications();
    handleModalOpen();
    setNotificationForId(id);
  }

  return (
    <div className={styles.container}>
      <span className={styles.header}>Notificações</span>
      <div className={styles.notificationsWrapper}>
        {notifications.map((notification) => (
          <div key={notification} className={styles.notification}>
            <span className={styles.notificationTitle}>
              Você usou um benefício? conta para a gente!
            </span>
            <span className={styles.notificationBody}>
              Você acessou o site de um parceiro, gostaríamos de saber se você
              usou algum benefício.{' '}
              <button
                onClick={() => modalOpenForId(notification)}
                className={styles.modalOpen}
              >
                responder questionário
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
