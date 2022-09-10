# Notifications
## React-компонент для вывода оповещений

### Как использовать:
1. забираем папку src/components/shared/`Notifications` себе в проект;
2. импортируем компонент и хук:
```
import Notofications from './shared/Notifications/Notofications';
import { useNotification } from './shared/Notifications/useNotification';
```
3. используем хук, который возвращает список уведомлений `notifications` для компонента и функцию пуша уведомлений `pushNotification`:
```
const [notifications, pushNotification] = useNotification();
```
4. добавляем в разметку компонент:
```
<Notofications notifications={notifications} delayClose={delayClose} />
```
`notifications` получает список уведомлений из хука, `delayClose` — задержка автоматического закрытия уведомлений по умолчанию в мс (0 - уведомления надо закрывать руками).  

#### `pushNotification`
  Функция `pushNotification` первым аргументом принимает объект уведомления, а вторым — необязательный параметр задержки закрытия. Эта задержка имеет высший приоритет перед задержкой по умолчанию и необходима например для критических уведомлений, которые не должны закрываться автоматически.

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