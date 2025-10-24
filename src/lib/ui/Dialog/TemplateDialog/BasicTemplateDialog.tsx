import React, { useContext } from 'react';
import { useScrollLock } from "../../../hooks/lockScroll.hook";
import { ScreenSize } from "../../../model/sizeScreen";
import { BottomSheetsUi } from "../../Base/BottomSheets/BottomSheetsUi";
import { ModalDialogTemplate } from "./ModalDialogTemplate";
import { Typography } from '../../Text/Text/Typography';
import { SizeContext } from '../../Provider/SizeProvider';
import "./style/dialog-bottom.scss"

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
  const { screen } = useContext(SizeContext);
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
        className={`dialog-bottom ${props.className || ''}`}
      >
        {props.header && (
          <div className="dialog-bottom__header">
            <Typography type='heading'>{props.header}</Typography>
          </div>
        )}
        <div className="dialog-bottom__content dialog-bottom__content_color_text-surface-color">
            <div className='dialog-bottom__content__scroll'>
                {props.children}
            </div>
        </div>
        {props.action && (
          <div className="dialog-bottom__action">
            {props.action}
          </div>
        )}
      </div>
    </BottomSheetsUi>
  );
};