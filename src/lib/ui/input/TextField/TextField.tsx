import React, { useCallback, useEffect, useRef, useState } from "react";
import { X } from "../../Icons";
import "./TextField.scss";
import { Typography } from "../../Text/Text/Typography";
import { ITextFieldProps } from "../props";

/**
 * Компонент текстового поля с поддержкой иконок, валидации и различных состояний
 */
export const TextField = React.forwardRef<HTMLDivElement, ITextFieldProps>(
  (
    {
      onClick,
      inputRef,
      styleContainer,
      type = "text",
      transparent,
      readOnly,
      password,
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
      max,
      min,
      autoFocus,
      disabled,
      size = "medium",
      helperText, 
      errorText,
      onKeyDown
    },
    ref
  ) => {
    const inputContainerElement = useRef<HTMLDivElement>(null);
    const [isError, setError] = useState<boolean>(false);
    const [isFocused, setFocused] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(!!value);

    const focusInput = () => {
      if (!inputContainerElement.current) return;
      const input = inputContainerElement.current.querySelector("input");
      input?.focus();
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(e);
        setFocused(true);
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
        setFocused(false);
        setIsFilled(!!e.target.value);
    }

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

    const sizeClasses = {
      small: "text-field--small",
      medium: "text-field--medium",
      large: "text-field--large",
    };

    return (
    <div className={`input-field-container ${className || ""}`}>
    <div
        ref={ref}
        style={styleContainer}
        className={`
          input-field 
          text-field 
          ${sizeClasses[size]}
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
          <input
            ref={inputRef}
            max={max}
            min={min}
            readOnly={readOnly}
            disabled={disabled}
            required
            type={password ? "password" : type}
            className={`${isError ? "error" : ""}`}
            name={name}
            value={value}
            onClick={onClick}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
            aria-invalid={isError}
            aria-describedby={isError ? `${name}-error` : undefined}
          />
          {placeholder && (
            <label onClick={focusInput} className={isFilled ? "filled" : ""}>
              <span>{placeholder}</span>
            </label>
          )}
        </div>

        {onClear && value && !disabled && (
          <div className="icon-container clear-btn" onClick={onClear}>
            <X aria-label="Clear input" />
          </div>
        )}
        
      </div>
        {isError && errorText && <Typography type='small' className="error-text">{errorText}</Typography>}
        {helperText && !isError && <Typography type='small' className="helper-text">{helperText}</Typography>}
    </div>
    );
  }
);

TextField.displayName = "TextField";