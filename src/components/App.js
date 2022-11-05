import { useId, useState } from 'react';

import appStyles from './App.module.css';

import Input from './shared/Input/Input';
import Notifications from './shared/Notifications/Notifications';
import { useNotification } from './shared/Notifications/useNotification';

import { getRandomNotification } from '../utils/notificationGenerator';

const App = () => {
  const [notificationHeading, setNotificationHeading] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [selectedType, setSelectedType] = useState('success');
  const [delayClose, setDelayClose] = useState(5000);

  const typeSelectorId = useId();

  const [notifications, pushNotification] = useNotification();

  const addNotificationClick = () => {
    pushNotification({
      type: selectedType,
      text: notificationText,
      heading: notificationHeading,
    });
  };

  const addRandomNotificationClick = () => {
    pushNotification(getRandomNotification());
  };

  return (
    <div className={appStyles.page}>
      <Notifications notifications={notifications} delayClose={delayClose} />
      <div className={appStyles.form}>
        <div className={appStyles.form__delayBox}>
          {delayClose > 0
            ? `Close after ${delayClose / 1000} sec.`
            : "Don't close"}
          <input
            type="range"
            className={appStyles.form__delayRange}
            step="100"
            min="0"
            max="10000"
            value={delayClose}
            onChange={e => setDelayClose(e.target.value)}
          />
        </div>
        <button
          type="button"
          className={appStyles.form__btn + ' ' + appStyles.form__btn_size_big}
          onClick={addRandomNotificationClick}
        >
          random
        </button>
        <div>
          <p className={appStyles.form__heading}>Or custom notification</p>
          <p className={appStyles.form__subheading}>fields can be empty</p>
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
        <label htmlFor={typeSelectorId} className={appStyles.typeSelector}>
          Success
          <input
            type="checkbox"
            className={appStyles.typeSelector__switcher}
            id={typeSelectorId}
            checked={selectedType === 'success'}
            onChange={() => {
              selectedType === 'success'
                ? setSelectedType('error')
                : setSelectedType('success');
            }}
          />
          Error
        </label>
        <button
          type="button"
          className={
            appStyles.form__btn + ' ' + appStyles.form__btn_position_right
          }
          onClick={addNotificationClick}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default App;
