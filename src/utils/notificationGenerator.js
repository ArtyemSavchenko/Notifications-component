const errorHeadings = [
  '',
  'Error',
  'Connection lost',
  'ERROR',
  'Not found',
  'Fiasco'
];
const errorMessages = [
  '',
  'Lorem ipsum dolor sit amet consectetur',
  'adipisicing elit. Vel voluptatum illo nostrum architecto similique sequi',
  'excepturi omnis alias quidem perferendis',
  'Consectetur adipisicing elit. Expedita, voluptates'
]
const doneHeadings = [
  '',
  'Accept',
  'Congratulation',
  'Win-win',
  'Yoo-hoo',
  'You are breathtaking'
];
const doneMessages = [
  '',
  'Lorem ipsum dolor sit amet consectetur',
  'adipisicing elit. Vel voluptatum illo nostrum architecto similique sequi',
  'excepturi omnis alias quidem perferendis',
  'Consectetur adipisicing elit. Expedita, voluptates'
]

export const getNewNotification = () => {
  const randomArrEl = (arr) => {
    return arr[Math.floor((arr.length - 1) * Math.random())];
  }

  const notification = {};
  if (Math.random() > .5) {
    notification.type = 'error';
    notification.text = randomArrEl(errorMessages);
    notification.heading = randomArrEl(errorHeadings);
  } else {
    notification.type = 'done';
    notification.text = randomArrEl(doneMessages);
    notification.heading = randomArrEl(doneHeadings);
  }
  if(notification.text === '' && notification.heading === '') {
    notification.heading = 'Oops';
  }

  return notification;
};
