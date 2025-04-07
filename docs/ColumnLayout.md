# ColumnLayout

`ColumnLayout` - это гибкий компонент для отображения контента в нескольких колонках с возможностью кастомизации и обработки событий.

## Props

| Пропс             | Тип                                                                 | По умолчанию | Описание                                                                 |
|-------------------|---------------------------------------------------------------------|--------------|---------------------------------------------------------------------------|
| `className`       | `string`                                                           | -            | Дополнительные классы для контейнера                                      |
| `classNameColumn` | `string`                                                           | -            | Дополнительные классы для колонок                                         |
| `style`          | `React.CSSProperties`                                              | -            | Стили для контейнера                                                     |
| `items`          | `Array<{ indexCol: number, node: React.ReactNode }>`               | -            | Массив элементов для отображения в колонках                               |
| `countColumn`    | `number`                                                           | -            | Количество колонок                                                       |
| `gap`            | `number`                                                           | `5`          | Отступ между колонками в пикселях                                        |
| `minColumnWidth` | `string`                                                           | `'auto'`     | Минимальная ширина колонки (CSS значение, например '100px')               |
| `onClickColl`    | `(index: number, e: React.MouseEvent<HTMLDivElement>) => void`     | -            | Обработчик клика по колонке                                              |
| `onContextMenu`  | `(event: React.MouseEvent<HTMLDivElement>) => void`                | -            | Обработчик контекстного меню                                             |
| `onClick`        | `(event: React.MouseEvent<HTMLDivElement>) => void`                | -            | Обработчик клика по контейнеру                                           |

## Примеры использования

### Базовый пример

```jsx
<ColumnLayout
  countColumn={3}
  items={[
    { indexCol: 0, node: <div>Item 1</div> },
    { indexCol: 1, node: <div>Item 2</div> },
    { indexCol: 2, node: <div>Item 3</div> },
  ]}
/>
```

### Разное количество элементов в колонках

```jsx
<ColumnLayout
  countColumn={2}
  gap={10}
  items={[
    { indexCol: 0, node: <div>Column 1 Item 1</div> },
    { indexCol: 0, node: <div>Column 1 Item 2</div> },
    { indexCol: 1, node: <div>Column 2 Item 1</div> },
  ]}
/>
```

### С обработчиками событий

```jsx
<ColumnLayout
  countColumn={3}
  items={generateItems(6, 3)}
  onClickColl={(index) => console.log(`Column ${index} clicked`)}
  onContextMenu={(e) => console.log('Context menu opened')}
/>
```

### С кастомными стилями

```jsx
<ColumnLayout
  countColumn={4}
  items={generateItems(8, 4)}
  style={{ backgroundColor: '#f5f5f5', padding: '10px' }}
  classNameColumn="custom-column"
  minColumnWidth="200px"
/>
```

## Особенности

1. **Адаптивность**: Колонки автоматически растягиваются по доступной ширине
2. **Гибкость**: Поддерживает разное количество элементов в каждой колонке
3. **Доступность**: Поддерживает обработку кликов и контекстного меню
4. **Производительность**: Использует memoization для оптимизации рендеринга
