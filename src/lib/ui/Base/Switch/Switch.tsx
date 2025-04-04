import React, { forwardRef } from "react";
import "./Switch.scss";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Размер переключателя */
  size?: "small" | "medium" | "large";
  /** Вариант стиля */
  variant?: "primary" | "secondary" | "error";
  /** Показывать ли текст метки */
  showLabel?: boolean;
  /** Текст для включенного состояния */
  labelOn?: string;
  /** Текст для выключенного состояния */
  labelOff?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = "medium",
      variant = "primary",
      className = "",
      showLabel = false,
      labelOn = "On",
      labelOff = "Off",
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <label className={`switch-container ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          checked={checked}
          onChange={onChange}
          className={`switch-input switch--${size} switch--${variant}`}
          {...props}
        />
        {showLabel && (
          <span className="switch-label">
            {checked ? labelOn : labelOff}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";