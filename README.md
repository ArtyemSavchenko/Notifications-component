# Notifications
## React-компонент для вывода оповещений

Как использовать:
1. забираем папку src/components/shared/`Notifications` себе в преокт;
2. импортируем компонент и хук:
```
import Notofications from './shared/Notifications/Notofications';
import { useNotification } from './shared/Notifications/useNotification';
```
3. используем хук, который возвращает список уведомлений для компонента `notifications` и функцию пуша уведомлений `pushNotification`, которая принимает объект уведомления:
```
const [notifications, pushNotification] = useNotification(); //хук возвращает список оповещений, который мы
```
4. добавляем в разметку компонент:
```
<Notofications notifications={notifications} delayClose={delayClose} />
```
`notifications` получает список уведомлений из хука, `delayClose` — задержка автоматического закрытия уведомлений в мс (0 - уведомления надо закрывать руками).  

Объект уведомления:
```
{
  type: 'done', // done (зеленый фон) или error (красный фон)
  heading: 'Текст заголовка', // может отсутствовать
  text: 'Текст уведомления', // может отсутствовать
}
```

---
Интерактивное демо [`здесь`](https://artyemsavchenko.github.io/Notifications-component)