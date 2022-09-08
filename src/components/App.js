import { useState } from 'react';
import appStyles from './App.module.css';
import Notofications from './shared/Notifications/Notofications';
import { useNotification } from './shared/Notifications/useNotification';
import { getNewNotification } from '../utils/notificationGenerator';

const App = () => {
  const [notificationHeading, setNotificationHeading] = useState('Heading');
  const [notificationText, setNotificationText] = useState('Text');
  const [selectedType, setSelectedType] = useState('done');
  const [delayClose, setDelayClose] = useState(5000)

  const [notifications, addNotification] = useNotification();

  const addNotificationClick = () => {
    addNotification({
      type: selectedType,
      text: notificationText,
      heading: notificationHeading
    })
  }

  const addRandomNotificationClick = () => {
    addNotification(getNewNotification());
  }

  return (
    <div className={appStyles.page}>
      <Notofications notifications={notifications} delayClose={delayClose}/>
      <div className={appStyles.form}>
        <button
          type="button"
          className={appStyles.formBtn}
          onClick={addRandomNotificationClick}
        >
          GET RANDOM
        </button>

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
          onClick={addNotificationClick}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default App;
