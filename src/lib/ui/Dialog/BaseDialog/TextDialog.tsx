import React, { useCallback, useState, useEffect } from "react";
import { BasicTemplateDialog } from "../TemplateDialog/BasicTemplateDialog";
import { TextField } from "../../input/TextField/TextField";
import { TextButton } from "../../Base/Button/Button";
import { Typography } from "../../Text/Text/Typography";

export interface TextDialogProps {
  /** Текст сообщения перед полем ввода */
  text?: string;
  
  /** Заголовок диалога */
  header?: string;
  
  /** Колбек с введенным текстом */
  onSuccess?: (data: string) => void;
  
  /** Колбек при закрытии */
  onHide?: () => void;
  
  /** Плейсхолдер для поля ввода */
  placeholder?: string;
  
  /** Тип поля ввода (text, number, password и т.д.) */
  type?: React.HTMLInputTypeAttribute;
  
  /** Минимальное значение (для type="number") */
  min?: number;
  
  /** Максимальное значение (для type="number") */
  max?: number;
  
  /** Стили контейнера */
  styleContainer?: React.CSSProperties;
  
  /** Начальное значение поля */
  defaultValue?: string;
  
  /** Текст кнопки подтверждения */
  confirmText?: string;
  
  /** Текст кнопки отмены */
  cancelText?: string;
  
  /** Валидация введенного значения */
  validate?: (value: string) => boolean;
}

/**
 * Диалог с текстовым полем ввода.
 * Поддерживает различные типы ввода и валидацию.
 * 
 * @example
 * <TextDialog
 *   header="Введите имя"
 *   text="Пожалуйста, введите ваше имя:"
 *   onSuccess={handleNameSubmit}
 *   placeholder="Имя пользователя"
 * />
 */
export const TextDialog = ({
  styleContainer,
  text,
  header,
  onSuccess,
  onHide,
  placeholder,
  type = "text",
  min = 0,
  max = 100,
  defaultValue = "",
  confirmText = "OK",
  cancelText = "Отмена",
  validate,
}: TextDialogProps) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  // Валидация при изменении значения
  useEffect(() => {
    if (validate) {
      setIsValid(validate(value));
    } else if (type === "number") {
      const numValue = Number(value);
      setIsValid(!isNaN(numValue) && numValue >= min && numValue <= max)
    } else {
      setIsValid(true);
    }
  }, [value, validate, type, min, max]);

  const handleSuccess = useCallback(() => {
    if (isValid) {
      onSuccess?.(value);
      onHide?.();
    }
  }, [value, isValid, onSuccess, onHide]);

  const handleCancel = useCallback(() => {
    onHide?.();
  }, [onHide]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    if (type === "number") {
      if (newValue === "") {
        setValue("");
        return;
      }
      
      const numValue = Number(newValue);
      if (!isNaN(numValue)) {
        if (numValue < min) newValue = String(min);
        if (numValue > max) newValue = String(max);
        setValue(newValue);
      }
    } else {
      setValue(newValue);
    }
  };

  return (
    <BasicTemplateDialog 
      style={styleContainer} 
      header={header}
      action={
        <div>
          <TextButton onClick={handleCancel}>{cancelText}</TextButton>
          <TextButton 
            onClick={handleSuccess}
            disabled={!isValid || (type === "number" && value === "")}
          >
            {confirmText}
          </TextButton>
        </div>
      }
    >
      {text && <Typography type="body">{text}</Typography>}
      <div>
        <TextField
          type={type}
          min={min}
          max={max}
          border
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          error={!isValid}
        />
        {!isValid && type === "number" && (
          <Typography type="body">
            Введите число от {min} до {max}
          </Typography>
        )}
      </div>
    </BasicTemplateDialog>
  );
};