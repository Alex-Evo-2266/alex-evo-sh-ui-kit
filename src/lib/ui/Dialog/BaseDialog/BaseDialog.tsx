import React, { useCallback } from "react";
import { Typography } from "../../..";
import { BasicTemplateDialog } from "../TemplateDialog/BasicTemplateDialog";
import type { DialogButtonType  } from "../types";
import { DialogButton } from "../TemplateDialog/DialogButton";

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

  btns?: DialogButtonType[]
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
  btns
}: BaseDialogProps) => {
  const handleSuccess = useCallback(() => {
    onSuccess?.();
    onHide?.();
  }, [onSuccess, onHide]);

  const handleCancel = useCallback(() => {
    onCancel?.();
    onHide?.();
  }, [onCancel, onHide]);

  const renderActions = useCallback(() => {
    if (customActions) return customActions;
    if (disableDefaultButtons) return null;

    if(btns)
    return <DialogButton onHide={handleCancel} onSuccess={handleSuccess} btns={btns}/>


    return <DialogButton onHide={handleCancel} onSuccess={handleSuccess} btns={[
      {
      text: cancelText,
      hide: true,
      styleType: "outline"
    },{
      text: actionText ?? "OK",
      success: true
    }]}/>

  },[customActions, disableDefaultButtons, handleCancel, handleSuccess, actionText, cancelText])

  return (
    <BasicTemplateDialog 
      style={styleContainer} 
      header={header}
      onHide={handleCancel}
      action={renderActions()}
    >
      {text && <Typography type="body">{text}</Typography>}
      {children}
    </BasicTemplateDialog>
  );
};
