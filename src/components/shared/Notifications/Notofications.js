import Notification from './Notification';
import styles from './Notofications.module.css';

const Notofications = ({ notifications }) => {
  return (
    <div className={styles.box}>
      {notifications.list.map(item => (
        <Notification
          {...item}
          key={item.id}
          onClose={notifications.closeNotification}
        />
      ))}
    </div>
  );
};

export default Notofications;
