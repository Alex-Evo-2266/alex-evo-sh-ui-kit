
# GridLayout Component

Адаптивная CSS Grid Layout с автоматическим расчетом высоты строк.

## Особенности

- Автоматическое распределение элементов по доступному пространству
- Динамический расчет высоты строк на основе содержимого
- Поддержка отзывчивого дизайна
- Оптимизированная перерисовка при изменении размеров

## Использование

```jsx
import GridLayout, { GridLayoutItem } from './GridLayout'

<GridLayout 
  itemMinWith="200px" 
  itemMaxWith="1fr" 
  gridRowGap="20px"
>
  <GridLayoutItem>Content 1</GridLayoutItem>
  <GridLayoutItem>Content 2</GridLayoutItem>
  <GridLayoutItem>Content 3</GridLayoutItem>
</GridLayout>
```

## Props для GridLayout

| Prop           | Type   | Default | Description |
|----------------|--------|---------|-------------|
| children       | React.ReactNode | - | Дочерние элементы (GridLayoutItem) |
| className      | string | - | Дополнительные классы для сетки |
| gridRowGap     | string | "10px" | Отступ между строками |
| gridColumnGap  | string | "5px"  | Отступ между колонками |
| itemMinWith    | string | - | Минимальная ширина элемента |
| itemMaxWith    | string | - | Максимальная ширина элемента |
| itemWith       | string | "400px" | Фиксированная ширина элемента (если min/max не указаны) |
| minWith        | string | - | Минимальная ширина всей сетки |

## GridLayoutItem Component

Элемент сетки, который должен содержаться внутри GridLayout.

### Props

| Prop     | Type   | Description |
|----------|--------|-------------|
| children | React.ReactNode | Содержимое элемента сетки |

## Принцип работы

1. Сетка автоматически рассчитывает количество колонок на основе:
   - Ширины контейнера
   - Указанных минимальной/максимальной ширины элементов
   - Использует CSS Grid `repeat(auto-fill, minmax())`

2. Высота строк рассчитывается динамически на основе:
   - Высоты содержимого каждого элемента
   - Указанных отступов между строками
   - Автоматически применяет `grid-row-end: span X` для элементов

3. Компонент реагирует на:
   - Изменение размеров окна
   - Изменение содержимого элементов
   - Изменение количества дочерних элементов
