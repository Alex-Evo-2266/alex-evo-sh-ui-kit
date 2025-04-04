import React, { useCallback } from "react";
import "./IconButton.scss";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Иконка для отображения */
  icon: React.ReactNode;
  /** Дополнительные классы для кнопки */
  className?: string;
  /** Дополнительные классы для контейнера иконки */
  classNameContainer?: string;
  /** Прозрачный фон */
  transparent?: boolean;
  /** Размер кнопки */
  size?: "small" | "medium" | "large";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      className = "",
      classNameContainer = "",
      transparent = false,
      size = "medium",
      onClick,
      onContextMenu,
      disabled = false,
      style,
      ...props
    },
    ref
  ) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        
        onClick?.(e);
        createRippleEffect(e);
      },
      [onClick, disabled]
    );

    const createRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
      circle.classList.add("iconbutton-ripple");

      const ripple = button.getElementsByClassName("iconbutton-ripple")[0];
      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    };

    return (
      <button
        ref={ref}
        style={{
          backgroundColor: transparent ? "transparent" : undefined,
          ...style,
        }}
        className={`iconbutton iconbutton--${size} ${className}`}
        onClick={handleClick}
        onContextMenu={onContextMenu}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        <div className={`iconbutton-container ${classNameContainer}`}>
          {icon}
        </div>
      </button>
    );
  }
);

IconButton.displayName = "IconButton";