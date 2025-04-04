
import './Chips.scss';
import { ScreenSize } from '../../../model/sizeScreen';
import { Typography } from '../../Text/Text/Typography';
import { X } from '../../Icons';
import React from 'react';

export interface ChipsProps {
  /** Текст чипса */
  text: string;
  /** Обработчик клика по чипсу */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** Обработчик удаления чипса */
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Большой размер */
  big?: boolean;
  /** Размер экрана для адаптивности */
  screenSize?: ScreenSize;
  /** Дополнительные классы */
  className?: string;
}

export const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  ({ text, onDelete, big, onClick, screenSize, className }, ref) => {
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDelete?.(e);
    };

    return (
      <div
        ref={ref}
        className={`chips ${big ? 'chips--big' : ''} ${onClick ? 'chips--clickable' : ''} ${className || ''}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={onClick ? text : undefined}
      >
        <Typography type="body" screensize={screenSize}>
          {text}
        </Typography>
        {onDelete && (
          <button
            className="chips__delete"
            onClick={handleDelete}
            aria-label={`Remove ${text}`}
            type="button"
          >
            <X />
          </button>
        )}
      </div>
    );
  }
);

Chips.displayName = 'Chips';