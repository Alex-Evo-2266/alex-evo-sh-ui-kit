import { ScreenSize } from "../../model/sizeScreen";

export interface IOption{
    title: string
    value: string
    icon?: React.ReactNode;
    disabled?: boolean;
}

// Базовый интерфейс для всех полей ввода
export interface IBaseFieldProps {
    /** Обработчик изменения значения */
    onChange?: (value: any, name?: string) => void;
    /** Имя поля */
    name?: string;
    /** Значение поля */
    value?: any;
    /** Подсказка в поле */
    placeholder?: string;
    /** Дополнительные CSS-классы */
    className?: string;
    /** Показать состояние ошибки */
    error?: boolean;
    /** Текст ошибки */
    errorText?: string;
    /** Вспомогательный текст */
    helperText?: string;
    /** Обработчик фокуса */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Обработчик потери фокуса */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Показать границу */
    border?: boolean;
    /** Отключено ли поле */
    disabled?: boolean;
    /** Размер компонента */
    size?: "small" | "medium" | "large";
    /** Прозрачный фон */
    transparent?: boolean;
    /** Стили компонента */
    style?: React.CSSProperties;
    /** Ref для input элемента */
    inputRef?: React.RefObject<HTMLInputElement>;
    /** Иконка для поля */
    icon?: React.ReactNode;
    /** Обработчик клика по полю */
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    /** Обработчик нажатия клавиши */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** Только для чтения */
    readOnly?: boolean;
    /** ARIA-метки */
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    /** Минимальная ширина */
    minWidth?: string;
  }
  
  // Интерфейс для текстового поля
  export interface ITextFieldProps extends IBaseFieldProps {

    /** Валидация пустого значения */
    validEmptyValue?: boolean;
    /** Обработчик очистки поля */
    onClear?: () => void;
    /** Парольное поле */
    password?: boolean;
    /** Тип поля */
    type?: string;
    /** Минимальное значение */
    min?: number;
    /** Максимальное значение */
    max?: number;
    /** Стили контейнера */
    styleContainer?: React.CSSProperties;
    /** Автоматический фокус при монтировании */
    autoFocus?: boolean;
  }
  
  // Интерфейс для числового поля
  export interface INumberFieldProps extends IBaseFieldProps {
    /** Минимальное значение */
    min?: number;
    /** Максимальное значение */
    max?: number;
    /** Шаг изменения значения */
    step?: number;
    /** Обработчик очистки поля */
    onClear?: () => void;
    /** Валидация пустого значения */
    validEmptyValue?: boolean;
    /** Стили контейнера */
    styleContainer?: React.CSSProperties;

  }
  
  // Интерфейс для поля выбора (select)
  export interface ISelectFieldProps extends IBaseFieldProps {
    /** Элементы для выбора */
    items: (IOption | string)[];
    /** Контейнер для модального окна */
    container: HTMLElement | null;
    /** Размер экрана (опционально) */
    screensize?: ScreenSize;
  }
  
  // Интерфейс для поля времени
  export interface ITimeFieldProps extends IBaseFieldProps {
    /** Валидация пустого значения */
    validEmptyValue?: boolean;
    /** Контейнер для модального окна */
    container: HTMLElement | null;
  }
  

    // Интерфейс для компонента MoreText
    export interface IMoreTextProps extends IBaseFieldProps {
    /** Текст кнопки добавления */
    addButtonLabel?: string;
    /** Разделитель значений */
    separator?: string;
    /** ARIA-метка для контейнера с чипсами */
    chipsAriaLabel?: string;
    
    // Переопределяем value как обязательный
    value: string;
    // Переопределяем onChange с более конкретной сигнатурой
    onChange?: (value: string) => void;
    /**
     * ID компонента (для ARIA-связей)
     */
    id?: string
    }