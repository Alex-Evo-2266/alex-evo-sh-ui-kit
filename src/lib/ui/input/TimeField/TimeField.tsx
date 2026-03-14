import { useCallback, useState, useEffect, useMemo, useId } from "react"
import "./TimeField.scss"
import { ModalPortal } from "../../../portal/dialog"
import { TimePicker } from "./TimePickers"
import { Clock } from "../../Icons"
import { Typography } from "../../Text/Text/Typography"
import { ITimeFieldProps } from "../props"

const sizeClasses = {
  small: "input-field__time-field_small",
  medium: "input-field__time-field_medium",
  large: "input-field__time-field_large",
};

/**
 * Кастомизируемое поле для ввода времени с всплывающим пикером.
 * 
 * Особенности:
 * - Кастомный пикер времени
 * - Валидация пустых значений
 * - Отображение состояния ошибки
 * - Поддержка вспомогательного текста
 * - Доступная реализация
 */
export const TimeField = ({
  border,
  onChange,
  name,
  value = "",
  className = "",
  validEmptyValue,
  error,
  container,
  disabled = false,
  errorText,
  helperText,
  ariaLabel,
  size = "medium",
  ariaLabelledby,
  placeholder,
  onBlur,
  onFocus,
  style,
  ...props
}: ITimeFieldProps) => {
  const [timeValue, setTimeValue] = useState<string>(value)
  const [pickerVisible, setPickerVisible] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(!!value);
  const reactId = useId()

  // Определяем состояние ошибки
  const isError = error || !!errorText

  // Синхронизируем внутреннее состояние с переданным значением
  useEffect(() => {
    setTimeValue(value)
  }, [value])

  const getValidationClass = useCallback(() => {
    if (isError) return "error"
    if (validEmptyValue && !timeValue) return "error"
    return ""
  }, [timeValue, isError, validEmptyValue])

  const handleTimeChange = (hours: number, minutes: number) => {
    const hoursStr = String(hours).padStart(2, '0')
    const minutesStr = String(minutes).padStart(2, '0')
    const newValue = `${hoursStr}:${minutesStr}`
    setTimeValue(newValue)
    onChange?.(newValue)
  }

  const handleClick = () => {
    if (!disabled) {
      setPickerVisible(true)
    }
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

  useEffect(() => {
      setIsFilled(!!value);
  }, [value]);

  // Парсим начальные часы и минуты из текущего значения
  const initialHours = timeValue ? parseInt(timeValue.split(':')[0]) || 0 : 0
  const initialMinutes = timeValue ? parseInt(timeValue.split(':')[1]) || 0 : 0

  // Мемоизируем текст для оптимизации рендеров
  const bottomText = useMemo(() => {
    if (isError && errorText) {
      return (
        <Typography 
          type='small' 
          className="error-text"
          aria-live="polite"
          id={`${name}-error`}
        >
          {errorText}
        </Typography>
      )
    }
    if (helperText && !isError) {
      return (
        <Typography 
          type='small' 
          className="helper-text"
          id={`${name}-helper`}
        >
          {helperText}
        </Typography>
      )
    }
    return null
  }, [isError, errorText, helperText, name])

  return (
    <div className={`input-field-container ${className}`}>
      <div 
        className={`
          input-field 
          input-field__time-field 
          ${sizeClasses[size]}
          ${border ? "input-field_border" : ""} 
          ${isFocused ? "input-field_active" : ""} 
          ${isError ? "input-field_error" : ""} 
          ${disabled ? "input-field_disabled" : ""}
          `}
        aria-disabled={disabled}
        style={style}
      >
        <div 
          className="input-field__icon-container" 
          onClick={handleClick}
          aria-label="Открыть пикер времени"
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        >
          <Clock />
        </div>
        <div aria-label={ariaLabel} className="input-field__input-container" onClick={handleClick}>
          <input
            {...props}
            type="time" 
            className={`input-field__input-container__input ${getValidationClass()}`} 
            name={name} 
            value={timeValue}
            readOnly
            onBlur={handleBlur}
            onFocus={handleFocus}
            disabled={disabled}
            aria-labelledby={ariaLabelledby}
            aria-invalid={isError}
            aria-describedby={
              isError && errorText ? `${name}-error` : 
              helperText ? `${name}-helper` : undefined
            }
          />
          {placeholder && (
              <label 
              htmlFor={reactId} 
              className={`input-field__input-container__label 
              ${isFilled ? "input-field__input-container__label_filled" : ""}
              `}
              >
              <span className="input-field__input-container__label__span">{placeholder}</span>
              </label>
          )}
          <span className="input-field__input-container__text-field-line"></span>
        </div>
      </div>
      
      {bottomText}
      
      {pickerVisible && (
        <ModalPortal container={container}>
          <TimePicker 
            onHide={() => setPickerVisible(false)}
            onChange={handleTimeChange}
            hours={initialHours}
            minutes={initialMinutes}
          />
        </ModalPortal>
      )}
    </div>
  )
}