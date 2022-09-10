import { useId, useState } from 'react';
import appStyles from './App.module.css';
import Notofications from './shared/Notifications/Notofications';
import { useNotification } from './shared/Notifications/useNotification';
import { getNewNotification } from '../utils/notificationGenerator';
import Input from './shared/Input/Input';

const App = () => {
  const [notificationHeading, setNotificationHeading] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [selectedType, setSelectedType] = useState('done');
  const [delayClose, setDelayClose] = useState(5000);

  const notificationTypeId = useId();

  const [notifications, pushNotification] = useNotification();

  const addNotificationClick = () => {
    pushNotification({
      type: selectedType,
      text: notificationText,
      heading: notificationHeading
    });

  };

  const addRandomNotificationClick = () => {
    pushNotification(getNewNotification());
  };

  return (
    <div className={appStyles.page}>
      <Notofications notifications={notifications} delayClose={delayClose} />
      <div className={appStyles.form}>
        <div className={appStyles.delayBox}>
          {delayClose > 0
            ? `Close after ${delayClose / 1000} sec.`
            : "Don't close"}
          <input
            type="range"
            className={appStyles.delayRange}
            step="100"
            min="0"
            max="10000"
            value={delayClose}
            onChange={e => setDelayClose(e.target.value)}
          />
        </div>
        <button
          type="button"
          className={appStyles.formBtn + ' ' + appStyles.formBtnBig}
          onClick={addRandomNotificationClick}
        >
          random
        </button>
        <div>
          <p className={appStyles.heading}>Or custom notification</p>
          <p className={appStyles.subheading}>fields can be empty</p>
        </div>
        <Input
          placeholder="Title"
          value={notificationHeading}
          onChange={e => setNotificationHeading(e.target.value)}
        />
        <Input
          placeholder="Text"
          value={notificationText}
          onChange={e => setNotificationText(e.target.value)}
        />
        <label
          htmlFor={notificationTypeId}
          className={appStyles.notificationType}
        >
          Done
          <input
            type="checkbox"
            className={appStyles.notificationTypeSwitcher}
            id={notificationTypeId}
            checked={selectedType === 'done'}
            onChange={() => {
              selectedType === 'done'
                ? setSelectedType('error')
                : setSelectedType('done');
            }}
          />
          Error
        </label>
        <button
          type="button"
          className={appStyles.formBtn + ' ' + appStyles.formBtnAdd}
          onClick={addNotificationClick}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default App;
