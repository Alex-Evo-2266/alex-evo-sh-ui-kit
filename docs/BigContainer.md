# Документация BigContainer

## Обзор

Компонент `BigContainer` представляет собой контейнер с возможностью перетаскивания содержимого с помощью средней кнопки мыши (обычно нажатие колесика).

## Основные возможности

- Перетаскивание содержимого средней кнопкой мыши
- Настраиваемые размеры контейнера
- Управление позицией через пропсы
- Опциональное отключение перетаскивания

## Пропсы

| Пропс | Тип | По умолчанию | Описание |
|-------|-----|-------------|-----------|
| `children` | `React.ReactNode` | - | Дочерние элементы для отображения внутри контейнера |
| `className` | `string` | `''` | Дополнительный CSS-класс для контейнера |
| `height` | `string` | `'100%'` | Высота контейнера |
| `width` | `string` | `'100%'` | Ширина контейнера |
| `id` | `string` | - | HTML-атрибут ID для контейнера |
| `pozMove` | `IPoint` | `{x:0,y:0}` | Начальная/управляемая позиция содержимого (координаты x, y) |
| `draggable` | `boolean` | `true` | Включает/отключает возможность перетаскивания |

## Типы

```typescript
interface IPoint {
  x: number; // координата по горизонтали
  y: number; // координата по вертикали
}
```

## Примеры использования

### Базовое использование

```jsx
<BigContainer height="300px" width="500px">
  <div style={{ padding: '20px' }}>
    Содержимое, которое можно перетаскивать средней кнопкой мыши
  </div>
</BigContainer>
```

### С начальной позицией

```jsx
<BigContainer 
  height="400px" 
  width="600px"
  pozMove={{ x: 50, y: 50 }}
>
  <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
    Содержимое начинается с позиции (50, 50)
  </div>
</BigContainer>
```

### Без возможности перетаскивания

```jsx
<BigContainer 
  height="300px" 
  width="500px"
  draggable={false}
>
  <div style={{ padding: '20px' }}>
    Это содержимое нельзя перетаскивать
  </div>
</BigContainer>
```

## Поведение компонента

- Отслеживает нажатие средней кнопки мыши (код кнопки 1)
- При начале перетаскивания курсор меняется на 'move'
- После окончания перетаскивания курсор возвращается в стандартное состояние
- Позиция содержимого может управляться извне через пропс `pozMove`
- Перетаскивание можно полностью отключить пропсом `draggable`
