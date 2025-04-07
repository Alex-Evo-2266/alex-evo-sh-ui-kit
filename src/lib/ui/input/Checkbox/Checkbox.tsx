

import { Check } from "../../Icons";
import "./Checkbox.scss";
import React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'> {
  /**
   * Кастомная иконка для отмеченного состояния
   */
  checkIcon?: React.ReactNode;
  /**
   * Размер чекбокса
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    name,
    checked,
    onChange,
    readOnly,
    disabled,
    checkIcon = <Check baseColor="var(--On-primary-color)"/>,
    size = 'medium',
    className,
    ...props
  }, ref) => {
    return (
      <label
        className={[
          'checkbox-container',
          `checkbox--${size}`,
          disabled ? 'checkbox--disabled' : '',
          className
        ].filter(Boolean).join(' ')}
      >
        <input
          ref={ref}
          className="checkbox-input"
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          aria-checked={checked}
          {...props}
        />
        <span className="checkbox-box">
            <span className="checkbox-icon-container">
                <span className="checkbox-check-icon">
                    {checkIcon}
                </span>
            </span>
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";