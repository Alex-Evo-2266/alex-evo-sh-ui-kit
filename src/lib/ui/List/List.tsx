// List.tsx
import React, { forwardRef, HTMLAttributes, LiHTMLAttributes } from "react";
import { Typography } from "../Text/Text/Typography";
import "./List.scss";

/**
 * Пропсы для контейнера списка
 */
export interface ListContainerProps extends HTMLAttributes<HTMLUListElement> {
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
export const ListContainer = forwardRef<HTMLUListElement, ListContainerProps>(({
  children,
  className = "",
  maxHeight,
  scroll,
  transparent,
  width,
  padding,
  margin,
  ...rest
}, ref) => {
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
    scroll ? "list-container_scroll" : "",
    transparent ? "list-container_transparent" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul ref={ref} style={styles} className={classes} {...rest}>
      {children}
    </ul>
  );
})

/**
 * Пропсы для элемента списка
 */

export interface ListItemContainerProps extends LiHTMLAttributes<HTMLLIElement> {
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

    shadow?: number;
  }
  
  export const ListItem = forwardRef<HTMLLIElement, ListItemContainerProps>(({
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
    shadow = 0,
    ...rest
  }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
      if (!disabled && !(event.target as HTMLElement).closest(".control-container")) {
        onClick?.(event);
      }
    };
  
    const classes = [
      "list-item-container",
      className,
      `list-item-container_shadow-${shadow}`,
      hovered && !disabled ? "list-item-container_hovered" : "",
      disabled ? "list-item-container_disabled" : "",
      active ? "list-item-container_active" : "",
    ]
      .filter(Boolean)
      .join(" ");
  
    return (
      <li ref={ref} className={classes} onClick={handleClick} aria-disabled={disabled} {...rest}>
        {(icon || value) && (
          <div className="list-item-container__icon-container">
            {icon || (value && <Typography type="body">{value}</Typography>)}
          </div>
        )}
        {(header || text || description) && (
          <div className="list-item-container__text-container">
            {header && (
              <div className="list-item-container__text-container__header">
                <Typography type="body">{header}</Typography>
              </div>
            )}
            {text && (
              <div className="list-item-container__text-container__text">
                <Typography type="small">{text}</Typography>
              </div>
            )}
            {description && (
              <div className="list-item-container__text-container__description">
                <Typography type="small" color="variant">
                  {description}
                </Typography>
              </div>
            )}
          </div>
        )}
        {control && <div onClick={e=>{e.stopPropagation()}} className="list-item-container__control-container">{control}</div>}
      </li>
    );
  })