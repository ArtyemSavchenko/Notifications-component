import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import NotificationsProvider from './components/shared/Notifications/Notifications';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationsProvider delayClose={5000}>
      <App />
    </NotificationsProvider>
  </React.StrictMode>
);
