import { useState } from 'react';

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const pushNotification = (notification, delayClose = null) => {
    const date = new Date();
    const newId = date.getSeconds() + date.getMilliseconds() + Math.random();
    const newNotification = {
      ...notification,
      id: newId,
    };
    if (delayClose !== null) {
      newNotification.delayClose = delayClose;
    }
    setNotifications(notifications => [newNotification, ...notifications]);
    return newId;
  };

  const closeNotification = id => {
    setNotifications(notifications =>
      notifications.reduce((prev, not) => {
        if (not.id !== id) {
          prev.push(not);
        }
        return prev;
      }, [])
    );
  };

  return [{ list: notifications, closeNotification }, pushNotification];
};
