import React, { forwardRef } from "react";
import { useScreenSize } from "../../hooks/screenSize.hook";
import { ScreenSize } from "../../model/sizeScreen";
import { Typography } from "../Text/Text/Typography";
import "./Card.scss";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Действия внизу карточки (кнопки и т.д.) */
  action?: React.ReactNode;
  /** URL изображения */
  imgSrc?: string;
  /** Альтернативный текст изображения */
  alt?: string;
  /** Основной заголовок */
  header?: string;
  /** Подзаголовок */
  subhead?: string;
  /** Основной текст */
  text?: string;
  /** Иконка/кнопка в заголовке */
  iconButtonCell?: React.ReactNode;
  /** Размер экрана для адаптации */
  screenSize?: ScreenSize;
  /** CSS-селектор корневого элемента */
  rootApp?: string;
  /** Вариант стиля карточки */
  variant?: "elevated" | "filled" | "outlined";
  /** Состояние загрузки */
  loading?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = "",
      action,
      imgSrc,
      alt,
      header,
      subhead,
      text,
      children,
      iconButtonCell,
      onClick,
      screenSize: screenProps,
      rootApp = "#root",
      variant = "elevated",
      loading = false,
      style,
      ...props
    },
    ref
  ) => {
    const { screen } = useScreenSize();
    const currentScreenSize = screenProps ?? screen;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isValidCardClick(e)) return;
      onClick?.(e);
      createRippleEffect(e);
    };

    const isValidCardClick = (e: React.MouseEvent<HTMLDivElement>): boolean => {
      const target = e.target as Element;
      return (
        !target.closest(".action-container") &&
        !target.closest(".icon-button-container") &&
        !target.closest(".card-child-container") &&
        !target.closest(".card-children") &&
        !!target.closest(rootApp)
      );
    };

    const createRippleEffect = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rippleContainer = card.querySelector(".card-ripple-container");
      if (!rippleContainer) return;

      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.className = "card-ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      rippleContainer.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    return (
      <div
        ref={ref}
        style={style}
        className={`card card--${variant} ${loading ? "card--loading" : ""} ${className}`}
        onClick={handleClick}
        {...props}
      >
        <div className="card-ripple-container"></div>
        
        {imgSrc && (
          <div className="card-image-container">
            <img src={imgSrc} alt={alt} loading="lazy" />
            {loading && <div className="card-image-overlay" />}
          </div>
        )}

        <div className="card-content">
          {(header || iconButtonCell) && (
            <div className="card-header">
              {header && (
                <Typography 
                  type="title" 
                  weight="bold" 
                  screensize={currentScreenSize}
                  className="card-title"
                >
                  {header}
                </Typography>
              )}
              {iconButtonCell && (
                <div className="card-icon-button">{iconButtonCell}</div>
              )}
            </div>
          )}

          {subhead && (
            <Typography 
              type="title-2" 
              weight="bold" 
              screensize={currentScreenSize}
              className="card-subhead"
            >
              {subhead}
            </Typography>
          )}

          {text && (
            <Typography 
              type="body" 
              screensize={currentScreenSize}
              className="card-text"
            >
              {text}
            </Typography>
          )}

          {children && <div className="card-children">{children}</div>}
          
          {action && <div className="card-actions">{action}</div>}
        </div>

        {loading && <div className="card-loading-indicator" />}
      </div>
    );
  }
);

Card.displayName = "Card";