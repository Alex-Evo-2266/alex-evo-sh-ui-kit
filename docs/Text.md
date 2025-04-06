# Документация компонента Typography

## Обзор

Компонент `Typography` предоставляет единую систему типографики для приложения, поддерживающую различные размеры экранов, начертания и межстрочные интервалы.


## Пропсы

| Пропс       | Тип                                      | По умолчанию   | Описание |
|-------------|------------------------------------------|----------------|----------|
| `type`      | `'title'`, `'title-2'`, `'heading'`, `'body'`, `'small'` | `'body'` | Тип текстового элемента |
| `screensize`| `ScreenSize.MOBILE`, `ScreenSize.STANDART`, `ScreenSize.BIG_SCREEN` | `ScreenSize.STANDART` | Размер экрана для адаптации стилей |
| `weight`    | `'thin'`, `'standart'`, `'bold'`        | `'standart'`   | Насыщенность шрифта |
| `density`   | `'tight'`, `'normal'`, `'loose'`        | `'normal'`     | Межстрочный интервал |
| `children`  | `React.ReactNode`                        | -              | Содержимое текстового элемента |
| `...rest`   | `HTMLAttributes`                         | -              | Стандартные HTML-атрибуты |

## Примеры использования

### Базовые текстовые стили

```jsx
<Typography type="body">Основной текст</Typography>
<Typography type="small">Мелкий текст</Typography>
<Typography type="heading">Заголовок</Typography>
<Typography type="title">Главный заголовок</Typography>
<Typography type="title-2">Подзаголовок</Typography>
```

### Настройка начертания

```jsx
<Typography type="body" weight="thin">Тонкий текст</Typography>
<Typography type="body" weight="standart">Обычный текст</Typography>
<Typography type="body" weight="bold">Жирный текст</Typography>
```

### Межстрочные интервалы

```jsx
<Typography type="body" density="tight">Плотный интервал</Typography>
<Typography type="body" density="normal">Нормальный интервал</Typography>
<Typography type="body" density="loose">Свободный интервал</Typography>
```

### Адаптация под разные экраны

```jsx
<Typography type="title" screensize={ScreenSize.MOBILE}>Для мобильных</Typography>
<Typography type="title" screensize={ScreenSize.STANDART}>Для планшетов</Typography>
<Typography type="title" screensize={ScreenSize.BIG_SCREEN}>Для десктопов</Typography>
```

## CSS Переменные

Компонент использует следующие CSS-переменные:

### Размеры шрифта
```css
--body-small-screen: 18px;
--body-standart-screen: 18px;
--body-big-screen: 20px;

--small-small-screen: 12px;
--small-standart-screen: 12px;
--small-big-screen: 12px;

--heading-small-screen: 32px;
--heading-standart-screen: 32px;
--heading-big-screen: 38px;

--title-small-screen: 24px;
--title-standart-screen: 28px;
--title-big-screen: 32px;

--title-2-small-screen: 20px;
--title-2-standart-screen: 24px;
--title-2-big-screen: 28px;
```

### Насыщенность шрифта
```css
--body-bold: 500;
--body-standart: 400;
--body-thin: 300;

--small-bold: 500;
--small-standart: 400;
--small-thin: 300;

--heading-bold: 600;
--heading-standart: 500;
--heading-thin: 400;

--title-bold: 600;
--title-standart: 500;
--title-thin: 400;

--title-2-bold: 600;
--title-2-standart: 500;
--title-2-thin: 400;
```

## Рекомендации

1. Используйте semantic-теги через пропсы для заголовков (`h1-h6`)
2. Для длинных текстов выбирайте `density="normal"` или `density="loose"`
3. Основной текст должен быть не менее 16px для accessibility
4. Сочетайте `title` с `heading` для иерархии заголовков
5. Используйте `small` для вспомогательного текста (подписи, метки)

## Особенности работы

- Компонент автоматически выбирает HTML-тег (`h3` для заголовков, `span` для текста)
- Все стандартные HTML-атрибуты передаются на корневой элемент
- Стили наследуют `font-family` и `color` от родителя
- Поддерживается адаптивный дизайн через CSS-переменные