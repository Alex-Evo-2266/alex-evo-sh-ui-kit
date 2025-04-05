import React, { useCallback } from "react";
import { OutlineButton, TextButton } from "../../..";
import { BasicTemplateDialog } from "../TemplateDialog/BasicTemplateDialog";

export interface BaseDialogProps {
  /** Текст сообщения в диалоге */
  text?: string;
  
  /** Заголовок диалога */
  header?: string;
  
  /** Текст на кнопке действия */
  actionText?: string;
  
  /** Текст на кнопке отмены */
  cancelText?: string;
  
  /** Колбек при подтверждении */
  onSuccess?: () => void;
  
  /** Колбек при отмене */
  onCancel?: () => void;
  
  /** Колбек при закрытии (вызывается в любом случае) */
  onHide?: () => void;
  
  /** Стили контейнера */
  styleContainer?: React.CSSProperties;
  
  /** Дополнительный контент вместо текста */
  children?: React.ReactNode;
  
  /** Отключить стандартные кнопки */
  disableDefaultButtons?: boolean;
  
  /** Кастомные кнопки действий */
  customActions?: React.ReactNode;
}

interface BaseDialogButtonProps {
  actionText?: string;
  cancelText?: string;
  onSuccess?: () => void;
  onHide?: () => void;
  disabled?: boolean;
}

/**
 * Базовый диалоговый компонент для стандартных подтверждений и уведомлений.
 * Поддерживает как простой текст, так и кастомный контент.
 * 
 * @example
 * <BaseDialog
 *   header="Подтверждение"
 *   text="Вы уверены, что хотите выполнить это действие?"
 *   actionText="Да"
 *   cancelText="Нет"
 *   onSuccess={handleConfirm}
 *   onCancel={handleCancel}
 * />
 */
export const BaseDialog = ({
  styleContainer,
  text,
  header,
  actionText,
  cancelText = "Отмена",
  onSuccess,
  onCancel,
  onHide,
  children,
  disableDefaultButtons = false,
  customActions,
}: BaseDialogProps) => {
  const handleSuccess = useCallback(() => {
    onSuccess?.();
    onHide?.();
  }, [onSuccess, onHide]);

  const handleCancel = useCallback(() => {
    onCancel?.();
    onHide?.();
  }, [onCancel, onHide]);

  const renderActions = () => {
    if (customActions) return customActions;
    if (disableDefaultButtons) return null;
    
    return (
      <BaseDialogButton
        onHide={handleCancel}
        onSuccess={handleSuccess}
        actionText={actionText}
        cancelText={cancelText}
      />
    );
  };

  return (
    <BasicTemplateDialog 
      style={styleContainer} 
      header={header}
      action={renderActions()}
    >
      {text && <p className="base-dialog-text">{text}</p>}
      {children}
    </BasicTemplateDialog>
  );
};

/**
 * Компонент стандартных кнопок диалога
 */
const BaseDialogButton = ({
  actionText = "OK",
  cancelText = "Отмена",
  onSuccess,
  onHide,
  disabled = false,
}: BaseDialogButtonProps) => {
  return (
    <div className="dialog-button-container">
      {onHide && (
        <OutlineButton 
          onClick={onHide}
        >
          {cancelText}
        </OutlineButton>
      )}
      <TextButton 
        onClick={onSuccess}
        disabled={disabled}
      >
        {actionText}
      </TextButton>
    </div>
  );
};