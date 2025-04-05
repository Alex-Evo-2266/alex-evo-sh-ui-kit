import React, { useCallback, useEffect, useState } from "react";
import { IconButton } from "../../Base/IconButton/IconButton";
import { Button, TextButton } from "../../Base/Button/Button";
import { X } from "../../Icons";
import { useScrollLock } from "../../../hooks/lockScroll.hook";
import { ModalDialogTemplate } from "./ModalDialogTemplate";
import './FullScreenTemplateDialog.scss'
import { Typography } from "../../Text/Text/Typography";
import { useScreenSize } from "../../../hooks/screenSize.hook";
import { ScreenSize } from "../../../model/sizeScreen";

export interface FullScreenDialogProps {
  /** Содержимое диалога */
  children: React.ReactNode;
  
  /** Заголовок диалога */
  header?: string;
  
  /** Колбек при сохранении */
  onSave?: (data?: any) => void;
  
  /** Колбек при закрытии */
  onHide?: () => void;
  
  /** Дополнительные классы */
  className?: string;
  
  /** Пользовательские стили */
  style?: React.CSSProperties;
  
  /** Отступ снизу (для контента) */
  marginBottom?: number;
  
  /** Отключить полупрозрачный фон */
  disableBackplate?: boolean;
  
  /** Текст кнопки сохранения */
  saveText?: string;
  
  /** Текст кнопки отмены */
  cancelText?: string;
  
  /** Порог для переключения в полноэкранный режим */
  breakpoint?: number;
}

/**
 * Адаптивный диалог, который переключается между модальным и полноэкранным режимом
 * в зависимости от размера экрана.
 * 
 * @example
 * <FullScreenTemplateDialog
 *   header="Редактирование"
 *   onHide={handleClose}
 *   onSave={handleSave}
 * >
 *   <FormFields />
 * </FullScreenTemplateDialog>
 */
export const FullScreenTemplateDialog = ({
  style,
  className = "",
  header,
  children,
  onSave,
  onHide,
  marginBottom = 0,
  disableBackplate,
  saveText,
  cancelText,
  breakpoint = 720,
}: FullScreenDialogProps) => {
	const {screen} = useScreenSize({mobileSize: breakpoint})
	useScrollLock(true, document.body);

  const handleHide = () => {
    onHide?.();
  };

  const handleSave = () => {
    onSave?.();
  };

  if (screen !== ScreenSize.MOBILE) {
    return (
      <ModalDialogTemplate 
        disableBackplate={disableBackplate}
        style={style}
        header={header}
        className={`full-screen-dialog-base-format ${className}`}
        onHide={handleHide}
		action={
		  	<>
				<Button onClick={onHide ? handleHide : undefined}>{cancelText}</Button>
				<Button onClick={onSave ? handleSave : undefined}>{saveText}</Button>
			</>}
      >
        {children}
      </ModalDialogTemplate>
    );
  }

  return (
    <div 
      style={{ 
        ...style, 
        height: `calc(100vh - ${marginBottom}px)`,
        paddingBottom: `${marginBottom}px`
      }} 
      className={`full-screen-dialog-container ${className}`}
    >
      <div className="full-screen-dialog-header">
        <div className="dialog-icon-container">
          {onHide && (
            <IconButton 
              transparent 
              onClick={handleHide} 
              icon={<X />}
              aria-label="Закрыть"
            />
          )}
        </div>
        <div className="header">{header}</div>
        <div className="save-container">
          {onSave && (
            <button onClick={handleSave}>
				<Typography type='body' weight='bold'>
					{saveText || "Сохранить"}
				</Typography>
            </button>
          )}
        </div>
      </div>
      <div className="full-screen-dialog-content">
        {children}
      </div>
    </div>
  );
};