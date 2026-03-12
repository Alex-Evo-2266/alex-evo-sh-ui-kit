import { IconButton } from "../../Base/IconButton/IconButton";
import { Button, FilledButton } from "../../Base/Button/Button";
import { X } from "../../Icons";
import { useScrollLock } from "../../../hooks/lockScroll.hook";
import { ModalDialogTemplate } from "./ModalDialogTemplate";
import { Typography } from "../../Text/Text/Typography";
import { ScreenSize } from "../../../model/sizeScreen";
import { useContext } from "react";
import { SizeContext } from "../../Provider/SizeProvider";
import './style/full-screen-dialog.scss'
import type { DialogButtonType } from "../types";
import { DialogButton } from "./DialogButton";


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

  forceFullScreen?: boolean;

  btns?: DialogButtonType[]
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
  forceFullScreen,
  btns
}: FullScreenDialogProps) => {
	const {screen} = useContext(SizeContext)
	useScrollLock(true, document.body);

  const handleHide = () => {
    onHide?.();
  };

  const handleSave = () => {
    onSave?.();
  };

  const screenMode = forceFullScreen || screen === ScreenSize.MOBILE

  if (!screenMode) {
    return (
      <ModalDialogTemplate 
        disableBackplate={disableBackplate}
        style={style}
        header={header}
        className={`full-screen-dialog ${className}`}
        onHide={handleHide}
		action={
      (btns === undefined)?
		  	<>
          {onHide && <Button styleType="outline" onClick={handleHide}>{cancelText ?? "Отмена"}</Button>}
          {onHide && <Button onClick={handleSave}>{saveText ?? "Сохранить"}</Button>}
        </>:
        <DialogButton btns={btns} onHide={onHide} onSuccess={onSave}/>
        }
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
      className={`
        full-screen-dialog 
        full-screen-dialog__container 
        full-screen-dialog__container_color_surface-container 
        ${className}`}
    >
      <div className="full-screen-dialog__container__header">
        <div className="full-screen-dialog__container__header__button">
          {onHide && (
            <IconButton 
              transparent 
              onClick={handleHide} 
              icon={<X />}
              aria-label="Закрыть"
            />
          )}
        </div>
        <div className="full-screen-dialog__container__header__text">{header}</div>
        <div className="full-screen-dialog__container__header__save">
          {onSave && (
            <button onClick={handleSave} className="full-screen-dialog__container__header__save__button">
              <Typography type='body' weight='bold'>
                {saveText || "Сохранить"}
              </Typography>
            </button>
          )}
        </div>
      </div>
      <div className="full-screen-dialog__content">
        {children}
        {btns && <DialogButton btns={btns.filter(btn=>!btn.hide && !btn.success)}/>}
      </div>
    </div>
  );
};