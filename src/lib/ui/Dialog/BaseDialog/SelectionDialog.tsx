import React, { useCallback, useState } from "react";
import { BasicTemplateDialog, ListContainer, ListItem, OutlineButton, TextButton } from "../../..";
import { RadioButton } from "../../Base/RadioButton/RadioButton";
import { Divider } from "../../Other/Divider/Divider";

interface SelectionItem<T> {
  /** Текст элемента */
  title: string;
  
  /** Дополнительное описание */
  description?: string;
  
  /** Связанные данные */
  data: T;
  
  /** Отключить элемент */
  disabled?: boolean;

  icon?: React.ReactNode
}

interface SelectionDialogProps<T> {
  /** Колбек с выбранными данными */
  onSuccess?: (data: T) => void;
  
  /** Список элементов для выбора */
  items: SelectionItem<T>[];
  
  /** Заголовок диалога */
  header: string;
  
  /** Колбек при закрытии */
  onHide?: () => void;
  
  /** Имя группы radio кнопок */
  name?: string;
  
  /** Не закрывать диалог после выбора */
  noHide?: boolean;
  
  /** Текст кнопки подтверждения */
  confirmText?: string;
  
  /** Текст кнопки отмены */
  cancelText?: string;
  
  /** Выбранное значение по умолчанию */
  defaultValue?: T;
  
  /** Стили контейнера */
  style?: React.CSSProperties;
}

/**
 * Диалог выбора одного варианта из списка.
 * 
 * @example
 * <SelectionDialog
 *   header="Выберите язык"
 *   items={[
 *     { title: "Русский", data: "ru" },
 *     { title: "Английский", data: "en" }
 *   ]}
 *   onSuccess={handleLanguageSelect}
 * />
 */
export function SelectionDialog<T>({
  onSuccess,
  items,
  header,
  onHide,
  noHide = false,
  name = "selection_dialog",
  confirmText = "Выбрать",
  cancelText = "Отмена",
  defaultValue,
  style,
}: SelectionDialogProps<T>) {
  const [selectedValue, setSelectedValue] = useState<T | undefined>(defaultValue);

  const handleSuccess = useCallback(() => {
    if (selectedValue !== undefined) {
      onSuccess?.(selectedValue);
      setSelectedValue(undefined);
      !noHide && onHide?.();
    }
  }, [selectedValue, onSuccess, noHide, onHide]);

  const handleCancel = useCallback(() => {
    onHide?.();
  }, [onHide]);

  const handleSelectionChange = useCallback((data: T) => {
    setSelectedValue(data);
  }, []);

  return (
    <BasicTemplateDialog 
      header={header}
      style={style}
      action={
        <DialogButtons
          onHide={handleCancel}
          onSuccess={handleSuccess}
          disabled={selectedValue === undefined}
          confirmText={confirmText}
          cancelText={cancelText}
        />
      }
    >
      <Divider style={{ padding: 0 }} />
      <ListContainer
        transparent
        scroll 
        maxHeight="300px"
        aria-label="Варианты выбора"
      >
        {items.map((item, index) => (
          <label 
            key={`${name}_${index}`}
            aria-disabled={item.disabled}
          >
            <ListItem
              hovered={!item.disabled}
              header={item.title}
              icon={item.icon}
              description={item.description}
              onClick={!item.disabled ? () => handleSelectionChange(item.data) : undefined}
              control={
                <RadioButton
                  onClick={!item.disabled ? () => handleSelectionChange(item.data) : undefined}
                  name={name}
                  checked={item.data === selectedValue}
                  disabled={item.disabled}
                  aria-label={`Выбрать ${item.title}`}
                />
              }
            />
          </label>
        ))}
      </ListContainer>
      <Divider style={{ padding: 0 }} />
    </BasicTemplateDialog>
  );
}

interface DialogButtonsProps {
  onSuccess?: () => void;
  onHide?: () => void;
  disabled?: boolean;
  confirmText?: string;
  cancelText?: string;
}

function DialogButtons({
  onSuccess,
  onHide,
  disabled = false,
  confirmText = "OK",
  cancelText = "Отмена",
}: DialogButtonsProps) {
  return (
    <div>
      {onHide && (
        <OutlineButton onClick={onHide}>
          {cancelText}
        </OutlineButton>
      )}
      <TextButton 
        onClick={onSuccess} 
        disabled={disabled}
      >
        {confirmText}
      </TextButton>
    </div>
  );
}