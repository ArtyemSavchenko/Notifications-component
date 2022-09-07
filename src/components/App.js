import { useEffect, useState } from 'react';
import appStyles from './App.module.css';
import Notofications from './shared/Notifications/Notofications';

const App = () => {
  const [notificationHeading, setNotificationHeading] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [selectedType, setSelectedType] = useState('done');
  const [notifications, setNotifications] = useState([]);

  const handlerCloseNotification = id => {
    setNotifications(
      notifications.reduce((prev, item) => {
        if (item.id !== id) {
          prev.push(item);
        }
        return prev;
      }, [])
    );
  };

  const addNotification = () => {
    const date = new Date();
    setNotifications([
      {
        id: date.getSeconds() + '' + date.getMilliseconds(),
        type: selectedType,
        heading: notificationHeading,
        text: notificationText
      },
      ...notifications
    ]);
  };

  useEffect(() => {
    setNotifications([]);
  }, []);

  return (
    <div className={appStyles.page}>
      <Notofications
        notifications={notifications}
        onClose={handlerCloseNotification}
      />
      <div className={appStyles.form}>
        <input
          className={appStyles.formInput}
          placeholder="Заголовок"
          value={notificationHeading}
          onChange={e => setNotificationHeading(e.target.value)}
        />
        <input
          className={appStyles.formInput}
          placeholder="Текст"
          value={notificationText}
          onChange={e => setNotificationText(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="type"
            value="done"
            checked={selectedType === 'done'}
            onChange={e => setSelectedType(e.target.value)}
          />
          Зеленый
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="error"
            checked={selectedType === 'error'}
            onChange={e => setSelectedType(e.target.value)}
          />
          Красный
        </label>
        <button
          type="button"
          className={appStyles.formBtn}
          onClick={addNotification}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default App;
