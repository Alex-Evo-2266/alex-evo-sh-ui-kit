// List.tsx
import React from "react";
import { Typography } from "../Text/Text/Typography";
import "./List.scss";

/**
 * Пропсы для контейнера списка
 */
export interface ListContainerProps {
  /** Дочерние элементы списка (обычно ListItem) */
  children?: React.ReactNode;
  /** Дополнительные классы для стилизации */
  className?: string;
  /** Максимальная высота списка, после которой появится скролл */
  maxHeight?: string;
  /** Включить скролл при превышении maxHeight */
  scroll?: boolean;
  /** Прозрачный фон контейнера */
  transparent?: boolean;
  /** Ширина контейнера */
  width?: string;
  /** Отступы внутри контейнера */
  padding?: string;
  /** Внешние отступы */
  margin?: string;
}

/**
 * Контейнер для списка элементов с поддержкой скролла и кастомизации
 */
export const ListContainer = ({
  children,
  className = "",
  maxHeight,
  scroll,
  transparent,
  width,
  padding,
  margin,
}: ListContainerProps) => {
  const styles:React.CSSProperties = {
    overflowY: maxHeight ? (scroll ? "scroll" : "hidden") : undefined,
    maxHeight,
    backgroundColor: transparent ? "transparent" : undefined,
    width,
    padding,
    margin,
  };

  const classes = [
    "list-container",
    className,
    scroll ? "scroll" : "",
    transparent ? "transparent" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul style={styles} className={classes}>
      {children}
    </ul>
  );
};

/**
 * Пропсы для элемента списка
 */
export interface ListItemContainerProps {
  /** Иконка элемента (ReactNode или строка) */
  icon?: React.ReactNode;
  /** Заголовок элемента */
  header?: string;
  /** Вторичный текст элемента */
  text?: string;
  /** Элемент управления (кнопка, переключатель и т.д.) */
  control?: React.ReactNode;
  /** Текстовое значение (альтернатива иконке) */
  value?: string;
  /** Обработчик клика */
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  /** Показывать hover-эффект */
  hovered?: boolean;
  /** Дополнительные классы */
  className?: string;
  /** Отключить элемент */
  disabled?: boolean;
  /** Выделить элемент как активный */
  active?: boolean;
}
export interface ListItemContainerProps {
    /** Иконка элемента (ReactNode или строка) */
    icon?: React.ReactNode;
    /** Заголовок элемента */
    header?: string;
    /** Основной текст элемента */
    text?: string;
    /** Дополнительное описание элемента (под основным текстом) */
    description?: string;
    /** Элемент управления (кнопка, переключатель и т.д.) */
    control?: React.ReactNode;
    /** Текстовое значение (альтернатива иконке) */
    value?: string;
    /** Обработчик клика */
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
    /** Показывать hover-эффект */
    hovered?: boolean;
    /** Дополнительные классы */
    className?: string;
    /** Отключить элемент */
    disabled?: boolean;
    /** Выделить элемент как активный */
    active?: boolean;
  }
  
  export const ListItem = ({
    icon,
    control,
    text,
    header,
    description,
    value,
    onClick,
    hovered = true,
    className = "",
    disabled = false,
    active = false,
  }: ListItemContainerProps) => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
      if (!disabled && !(event.target as HTMLElement).closest(".control-container")) {
        onClick?.(event);
      }
    };
  
    const classes = [
      "list-item-container",
      className,
      hovered && !disabled ? "hovered" : "",
      disabled ? "disabled" : "",
      active ? "active" : "",
    ]
      .filter(Boolean)
      .join(" ");
  
    return (
      <li className={classes} onClick={handleClick} aria-disabled={disabled}>
        {(icon || value) && (
          <div className="icon-container">
            {icon || (value && <Typography type="body">{value}</Typography>)}
          </div>
        )}
        {(header || text || description) && (
          <div className="text-container">
            {header && (
              <div className="header">
                <Typography type="body">{header}</Typography>
              </div>
            )}
            {text && (
              <div className="text">
                <Typography type="small">{text}</Typography>
              </div>
            )}
            {description && (
              <div className="description">
                <Typography type="small" color="variant">
                  {description}
                </Typography>
              </div>
            )}
          </div>
        )}
        {control && <div className="control-container">{control}</div>}
      </li>
    );
  };