import React from 'react';
import { useScrollLock } from "../../../hooks/lockScroll.hook";
import { useScreenSize } from "../../../hooks/screenSize.hook";
import { ScreenSize } from "../../../model/sizeScreen";
import { BottomSheetsUi } from "../../Base/BottomSheets/BottomSheetsUi";
import { ModalDialogTemplate } from "./ModalDialogTemplate";
import './BasicTemplateDialog.scss'
import { Typography } from '../../Text/Text/Typography';

export interface DialogProps {
  /** Содержимое диалога */
  children: React.ReactNode;
  
  /** Заголовок диалога */
  header?: string;
  
  /** Элементы действий (кнопки) внизу */
  action?: React.ReactNode;
  
  /** Колбек при закрытии */
  onHide?: () => void;
  
  /** Дополнительные классы */
  className?: string;
  
  /** Пользовательские стили */
  style?: React.CSSProperties;
  
  /** Отключить стандартные стили */
  clearStyle?: boolean;
  
  /** Отключить полупрозрачный фон */
  disableBackplate?: boolean;
  
  /** Отступ снизу для bottom sheet */
  marginBottom?: number;
  
  /** Принудительно использовать bottom sheet */
  forceBottomSheet?: boolean;
  
  /** Принудительно использовать модальное окно */
  forceModal?: boolean;
}

/**
 * Адаптивный диалог, который на мобильных превращается в bottom sheet
 * 
 * @example
 * <BasicTemplateDialog 
 *   header="Подтверждение"
 *   onHide={handleClose}
 *   action={<Button>OK</Button>}
 * >
 *   <p>Вы уверены?</p>
 * </BasicTemplateDialog>
 */
export const BasicTemplateDialog = ({
  marginBottom = 80,
  forceBottomSheet = false,
  forceModal = false,
  ...props
}: DialogProps) => {
  const { screen } = useScreenSize();
  useScrollLock(true, document.body);

  const hide = () => {
    props.onHide?.();
  };

  // Определяем тип отображения
  const displayAsBottomSheet = forceBottomSheet || 
    (!forceModal && screen === ScreenSize.MOBILE);

  if (!displayAsBottomSheet) {
    return <ModalDialogTemplate {...props} onHide={hide} />;
  }

  return (
    <BottomSheetsUi 
      bottom={marginBottom} 
      onHide={hide} 
      visible={true}
    >
      <div 
        style={props.style} 
        className={`dialog-container-bottom-sheet ${props.className || ''}`}
      >
        {props.header && (
          <div className="dialog-header">
            <Typography type='heading'>{props.header}</Typography>
          </div>
        )}
        <div className="dialog-content">
            <div className='dialog-content-scroll'>
                {props.children}
            </div>
        </div>
        {props.action && (
          <div className="dialog-action">
            {props.action}
          </div>
        )}
      </div>
    </BottomSheetsUi>
  );
};