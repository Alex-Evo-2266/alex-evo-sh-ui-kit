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
            text-area 
            input-field 
            text-field--area
            ${border ? "border" : ""} 
            ${isFocused ? "active" : ""} 
            ${transparent ? "transparent" : ""} 
            ${isError ? "error" : ""} 
            ${disabled ? "disabled" : ""}
          `}
          onClick={focusInput}
        >
          {icon && (
            <div className="icon-container" aria-hidden="true">
              {icon}
            </div>
          )}

          <div className="input-container" ref={inputContainerElement}>
            <textarea
              ref={inputRef}
              id={reactId}
              readOnly={readOnly}
              disabled={disabled}
              required
              rows={rows}
              name={name}
              value={value}
              className={`${isError ? "error" : ""}`}
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
                className={isFilled ? "filled" : ""}
              >
                <span>{placeholder}</span>
              </label>
            )}
          </div>

          {onClear && value && !disabled && (
            <div className="icon-container clear-btn" onClick={onClear}>
              <X aria-label="Clear textarea" />
            </div>
          )}
        </div>

        {isError && errorText && (
          <Typography type="small" className="error-text">
            {errorText}
          </Typography>
        )}

        {helperText && !isError && (
          <Typography type="small" className="helper-text">
            {helperText}
          </Typography>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";