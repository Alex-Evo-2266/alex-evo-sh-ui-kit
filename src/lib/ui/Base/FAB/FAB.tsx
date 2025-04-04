import React, { forwardRef } from "react";
import "./FAB.scss";

export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Иконка для кнопки */
  icon?: React.ReactNode;
  /** Текст кнопки (для Extended FAB) */
  children?: React.ReactNode;
  /** Размер кнопки */
  size?: "small" | "medium" | "large";
  /** Расположение кнопки */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "none";
  /** Тип кнопки */
  variant?: "primary" | "secondary" | "tertiary" | "surface";
}

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
  (
    {
      icon,
      children,
      size = "medium",
      position = "bottom-right",
      variant = "primary",
      className = "",
      ...props
    },
    ref
  ) => {
    const hasText = Boolean(children);
    
    return (
      <button
        ref={ref}
        type='button'
        className={`fab ${hasText ? "fab--extended" : ""} fab--${size} fab--${variant} ${
          position !== "none" ? `fab--${position}` : ""
        } ${className}`}
        aria-label={!hasText ? props["aria-label"] || "Floating action button" : undefined}
        {...props}
      >
        {icon && <span className="fab__icon">{icon}</span>}
        {hasText && <span className="fab__text">{children}</span>}
      </button>
    );
  }
);

FAB.displayName = "FAB";