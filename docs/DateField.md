# Документация компонента DateField

## Обзор
Компонент `DateField` представляет собой поле ввода даты с интерфейсом выбора из календаря. Предоставляет удобный способ выбора дат с возможностями валидации и обработки ошибок.

## Внешний вид  

![DateField](img/DateField.png)

## Пропсы

| Пропс | Тип | Описание | По умолчанию |
|-------|-----|----------|--------------|
| `border` | boolean | Добавляет границу к полю ввода | false |
| `onChange` | (value: string) => void | Колбек при изменении даты | - |
| `name` | string | Атрибут name для input | - |
| `value` | string | Текущее значение даты в формате "YYYY-MM-DD" | "" |
| `className` | string | Дополнительные CSS-классы | - |
| `error` | boolean | Ручное управление состоянием ошибки | - |
| `container` | HTMLElement | Контейнер для портала с календарем | - |
| `errorText` | string | Текст сообщения об ошибке | - |
| `helperText` | string | Вспомогательный текст под полем | - |
| `size` | 'small' \| 'medium' \| 'large' | Размер поля ввода | 'medium' |
| `disabled` | boolean | Отключает поле ввода | false |

## Особенности

- **Выбор из календаря**: Открывает модальное окно с календарем при клике
- **Форматирование даты**: Автоматически форматирует дату в "YYYY-MM-DD"
- **Валидация**: Поддержка состояний ошибки и валидационных сообщений
- **Размеры**: Поддержка маленького, среднего и большого размеров
- **Доступность**: Правильные атрибуты для accessibility
- **Порталы**: Календарь можно рендерить в указанном контейнере

## Пример использования

```jsx
<DateField 
  value="2023-05-15"
  onChange={(date) => console.log(date)}
  name="birthdate"
  errorText="Пожалуйста, выберите корректную дату"
  helperText="Выберите вашу дату рождения"
  size="large"
  border
/>
```

## Поведение

1. Клик по полю ввода или иконке календаря открывает модальное окно выбора даты
2. При выборе даты в календаре:
   - Форматирует дату в "YYYY-MM-DD"
   - Обновляет значение в поле ввода
   - Вызывает колбек onChange
   - Закрывает календарь
3. Состояния ошибки отображаются когда:
   - Пропс `error` равен true
   - Указан `errorText`
