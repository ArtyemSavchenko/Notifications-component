# Notifications
## React-компонент для вывода оповещений

### Как использовать:
1. забираем папку src/components/shared/`Notifications` себе в проект;
2. импортируем `NotificationsProvider` из Notifications и оборачиваем App в провайдер:
```
import NotificationsProvider from './components/shared/Notifications/Notifications';

<NotificationsProvider delayClose={5000}>
  <App />
</NotificationsProvider>
```
`delayClose` — задержка автоматического закрытия уведомлений по умолчанию в мс (0 - уведомления надо закрывать руками).  
2. импортируем хук `usePushNotification` внутри провайдера, он возвращает функцию вызова уведомления:
```
import { usePushNotification } from './shared/Notifications/Notifications';

const pushNotification = useNotification();
```

#### `pushNotification`
  Функция `pushNotification` первым аргументом принимает объект уведомления, а вторым — необязательный параметр задержки закрытия. Эта задержка имеет высший приоритет перед задержкой по умолчанию и необходима например для критических уведомлений, которые не должны закрываться автоматически.

Объект уведомления:
```
{
  type: 'success', // success (зеленый фон) или error (красный фон)
  heading: 'Текст заголовка', // может отсутствовать
  text: 'Текст уведомления', // может отсутствовать
}
```

---
Интерактивное демо [`здесь`](https://artyemsavchenko.github.io/Notifications-component)