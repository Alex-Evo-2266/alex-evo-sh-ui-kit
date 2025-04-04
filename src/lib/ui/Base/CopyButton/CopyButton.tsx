import { useCallback, useState } from "react";
import { IconButton, IconButtonProps } from "../IconButton/IconButton";
import { Check, Copy } from "../../Icons";
import { Typography } from "../../Text/Text/Typography";
import './CopyButton.scss';

export interface CopyButtonProps extends Omit<IconButtonProps, 'icon'> {
  /** Текст для копирования в буфер обмена */
  text: string;
  /** Показывать ли текст рядом с кнопкой */
  supportText?: boolean;
  /** Время в мс, сколько показывать состояние "Скопировано" */
  copiedTimeout?: number;
}

export const CopyButton = ({
  text,
  supportText = true,
  copiedTimeout = 2000,
  className = '',
  onClick,
  disabled,
  ...props
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), copiedTimeout);
    } catch (err) {
      console.error("Не удалось скопировать текст", err);
    }
    
    onClick?.(event);
  }, [text, disabled, copiedTimeout, onClick]);

  const icon = copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />;
  const labelText = copied ? "Скопировано!" : "Копировать";

  if (supportText) {
    return (
      <div className="copy-button">
        <IconButton 
          icon={icon}
          onClick={copyToClipboard}
          disabled={disabled}
          aria-label={`${labelText} ${text}`}
          className={className}
          {...props}
        />
        <Typography type="body" aria-live="polite">
          {labelText}
        </Typography>
      </div>
    );
  }

  return (
    <IconButton 
      icon={icon}
      onClick={copyToClipboard}
      disabled={disabled}
      aria-label={`${labelText} ${text}`}
      className={className}
      {...props}
    />
  );
};