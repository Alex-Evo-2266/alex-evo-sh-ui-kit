import React, { forwardRef, useEffect, useState } from "react";
import "./SegmentedButton.scss";
import { Check } from "../../Icons";

export interface SegmentedButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Массив элементов для отображения */
  items: string[];
  /** Текущее значение/значения */
  value?: string[] | string;
  /** Разрешить множественный выбор */
  multiple?: boolean;
  /** Имя группы элементов */
  name?: string;
  /** Только для чтения */
  readOnly?: boolean;
  /** Обработчик изменения значения */
  onChange?: (value: string[], event?: React.MouseEvent<HTMLButtonElement>) => void;
  /** Размер компонента */
  size?: "small" | "medium" | "large";
  /** Вариант стиля */
  variant?: "primary" | "secondary" | "surface";
}

export const SegmentedButton = forwardRef<HTMLDivElement, SegmentedButtonProps>(
  (
    {
      items,
      value,
      multiple = false,
      name,
      readOnly = false,
      onChange,
      className = "",
      size = "medium",
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    useEffect(() => {
      setSelectedValues(normalizeValue(value));
    }, [value]);

    const normalizeValue = (val?: string[] | string): string[] => {
      if (val === undefined) return [];
      if (Array.isArray(val)) return val;
      return [val];
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, item: string) => {
      if (readOnly) return;

      e.preventDefault();
      let newValues: string[];

      if (multiple) {
        newValues = selectedValues.includes(item)
          ? selectedValues.filter(v => v !== item)
          : [...selectedValues, item];
      } else {
        newValues = selectedValues.includes(item) ? [] : [item];
      }

      setSelectedValues(newValues);
      onChange?.(newValues, e);
    };

    return (
      <div
        ref={ref}
        className={`segmented-button segmented-button--${size} segmented-button--${variant} ${className}`}
        role="group"
        {...props}
      >
        {items.map((item) => (
          <button
            key={item}
            type="button"
            role="radio"
            aria-checked={selectedValues.includes(item)}
            aria-label={item}
            disabled={readOnly}
            className={`segmented-button__item ${
              selectedValues.includes(item) ? "segmented-button__item--active" : ""
            }`}
            onClick={(e) => handleClick(e, item)}
          >
            {selectedValues.includes(item) && (
              <span className="segmented-button__icon">
                <Check />
              </span>
            )}
            <span className="segmented-button__text">{item}</span>
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={item}
              checked={selectedValues.includes(item)}
              readOnly
              className="segmented-button__input"
            />
          </button>
        ))}
      </div>
    );
  }
);

SegmentedButton.displayName = "SegmentedButton";