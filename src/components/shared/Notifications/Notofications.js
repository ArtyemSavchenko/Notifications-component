import Notification from './Notification';
import styles from './Notofications.module.css';

const Notofications = ({ notifications, onClose }) => {

  return (
    <div className={styles.box}>
      {notifications.map(item => (
        <Notification
          {...item}
          key={item.id}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
export default Notofications;
