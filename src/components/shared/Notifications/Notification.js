import styles from './Notification.module.css';

const Notification = ({ id, type, heading, text, onClose }) => {
  const handlerBtnCloseClick = () => {
    onClose(id);
  };

  return (
    <article
      aria-label="Уведомление"
      className={
        styles.notification +
        ' ' +
        (type === 'done' ? styles.notificationDone : '') +
        (type === 'error' ? styles.notificationError : '')
      }
    >
      <div>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <button
        type="button"
        className={styles.btnClose}
        onClick={handlerBtnCloseClick}
        aria-label="Закрыть уведомление"
      />
    </article>
  );
};
export default Notification;
