import { useId, useState } from 'react';

import Input from './shared/Input/Input';

import { getRandomNotification } from '../utils/notificationGenerator';
import { usePushNotification } from './shared/Notifications/Notifications';

import appStyles from './App.module.css';

const App = () => {
  const [notificationHeading, setNotificationHeading] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [selectedType, setSelectedType] = useState('success');

  const typeSelectorId = useId();

  const pushNotification = usePushNotification();

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
      <div className={appStyles.form}>
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
          autocomplete="off"
        />
        <Input
          placeholder="Text"
          value={notificationText}
          onChange={e => setNotificationText(e.target.value)}
          autocomplete="off"
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
