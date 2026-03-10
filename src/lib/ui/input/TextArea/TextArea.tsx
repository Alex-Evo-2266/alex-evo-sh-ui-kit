import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "../../Icons";
import "./TextArea.scss";
import { Typography } from "../../Text/Text/Typography";
import { ITextAreaProps } from "../props";

/**
 * Компонент TextArea с поддержкой иконок, валидации и различных состояний
 */
export const TextArea = React.forwardRef<HTMLDivElement, ITextAreaProps>(
  (
    {
      onClick,
      inputRef,
      styleContainer,
      transparent,
      readOnly,
      border,
      onClear,
      icon,
      onChange,
      name,
      value,
      placeholder,
      className,
      validEmptyValue,
      onFocus,
      onBlur,
      error,
      autoFocus,
      disabled,
      helperText,
      errorText,
      rows = 3,
      onKeyDown
    },
    ref
  ) => {
    const inputContainerElement = useRef<HTMLDivElement>(null);
    const [isError, setError] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(!!value);

    const reactId = useId();

    const focusInput = () => {
      const textarea = inputContainerElement.current?.querySelector("textarea");
      textarea?.focus();
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onFocus?.(e);
      setFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onBlur?.(e);
      setFocused(false);
      setIsFilled(!!e.target.value);
    };

    const validateField = useCallback(
      (validEmptyValue?: boolean, value?: string | number) => {
        if (error) return setError(true);
        if (validEmptyValue && (!value || value === "")) return setError(true);
        return setError(false);
      },
      [error]
    );

    useEffect(() => {
      validateField(validEmptyValue, value);
      setIsFilled(!!value);
    }, [value, validEmptyValue, validateField]);

    return (
      <div className={`input-field-container ${className || ""}`}>
        <div
          ref={ref}
          style={styleContainer}
          className={`
            input-field__text-area 
            input-field 
            ${border ? "input-field_border" : ""} 
            ${isFocused ? "input-field_active" : ""} 
            ${transparent ? "input-field_transparent" : ""} 
            ${isError ? "input-field_error" : ""} 
            ${disabled ? "input-field_disabled" : ""}
          `}
          onClick={focusInput}
        >
          {icon && (
            <div className="input-field__icon-container" aria-hidden="true">
              {icon}
            </div>
          )}

          <div className="input-field__input-container input-field__text-area__input-container" ref={inputContainerElement}>
            <textarea
              ref={inputRef}
              id={reactId}
              readOnly={readOnly}
              disabled={disabled}
              required
              rows={rows}
              name={name}
              value={value}
              className={`input-field__input-container__input input-field__text-area__input-container__textarea ${isError ? "input-field__input-container__input_error" : ""}`}
              onClick={onClick}
              onChange={(e) => onChange?.(e.target.value, e.target.name, e)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={onKeyDown}
              autoFocus={autoFocus}
              aria-invalid={isError}
              aria-describedby={isError ? `${name}-error` : undefined}
            />

            {placeholder && (
              <label
                htmlFor={reactId}
                onClick={focusInput}
                className={`input-field__input-container__label input-field__text-area__label ${isFilled ? "input-field__input-container__label_filled" : ""}`}
              >
                <span className="input-field__input-container__label__span">{placeholder}</span>
              </label>
            )}
          </div>

          {onClear && value && !disabled && (
            <div className="input-field__icon-container input-field__icon-container__clear-btn" onClick={onClear}>
              <X aria-label="Clear textarea" />
            </div>
          )}
        </div>

        {isError && errorText && (
          <Typography type="small" className="input-field-container__error-text">
            {errorText}
          </Typography>
        )}

        {helperText && !isError && (
          <Typography type="small" className="input-field-container__helper-text">
            {helperText}
          </Typography>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";