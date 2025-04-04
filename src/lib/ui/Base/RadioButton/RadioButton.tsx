import React, { forwardRef } from "react";
import "./RadioButton.scss";

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'size'> {
  /** Название группы радиокнопок */
  name: string;
  /** Текущее выбранное значение в группе */
  currentValue?: string | number;
  /** Значение этой радиокнопки */
  value?: string | number;
  /** Текст метки */
  label?: string;
  /** Размер радиокнопки */
  size?: "small" | "medium" | "large";
  /** Вариант стиля */
  variant?: "primary" | "secondary" | "error";
  /** Показывать ли текст метки */
  showLabel?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      name,
      currentValue,
      value,
      onChange,
      readOnly,
      checked,
      defaultChecked,
      label,
      size = "medium",
      variant = "primary",
      showLabel = true,
      className,
      ...props
    },
    ref
  ) => {
    const isChecked = currentValue !== undefined 
      ? currentValue === value 
      : checked !== undefined 
        ? checked 
        : defaultChecked;

    return (
      <label className={`radio-button-container ${className || ""}`}>
        <input
          ref={ref}
          className="radio-button"
          name={name}
          type="radio"
          checked={isChecked}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          aria-checked={isChecked}
          aria-label={label || props["aria-label"]}
          {...props}
        />
        <span className={`radio-button-ui radio-button-ui--${size} radio-button-ui--${variant}`}></span>
        {showLabel && label && (
          <span className="radio-button-label">{label}</span>
        )}
      </label>
    );
  }
);

RadioButton.displayName = "RadioButton";
