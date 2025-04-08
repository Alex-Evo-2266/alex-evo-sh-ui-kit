import { useCallback, useState, useEffect } from "react";
import "./ColorField.scss";
import { ModalPortal } from "../../../portal/dialog";
import { ColorPicker } from "./ColorPicker";
import { Palette } from "../../Icons/Palette/Palette";
import { Typography } from "../../Text/Text/Typography";

interface ColorFieldProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  border?: boolean;
  container: HTMLElement | null;
  transparent?: boolean;
  userColors?: string[];
  onAddColor?: (colors: string[]) => void;
  defaultColor?: string;
}

export const ColorField = ({
  border = false,
  onChange,
  container,
  value = "#f00",
  className = "",
  transparent = false,
  userColors = [],
  onAddColor,
  defaultColor,
  placeholder,
}: ColorFieldProps) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [color, setColor] = useState(value);

  useEffect(() => {
    if (value !== undefined) {
      setColor(value);
    }
  }, [value]);

  const handleClick = useCallback(() => {
    setIsPickerVisible(true);
  }, []);

  const handleChange = useCallback(
    (newColor: string) => {
      setColor(newColor);
      onChange?.(newColor);
      setIsPickerVisible(false);
    },
    [onChange]
  );

  const handleClose = useCallback(() => {
    setIsPickerVisible(false);
  }, []);

  const fieldClasses = [
    "input-field",
    "color-field",
    border ? "border" : "",
    transparent ? "transparent" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={fieldClasses}>
        <div className="color-indicator-field">
            <div 
            className="color-circle" 
            style={{ backgroundColor: color }}
            onClick={handleClick}
            aria-label="Current color"
            />
            <div className="color-indicator-field" onClick={handleClick}>
                <Typography type='body'>
                    {color}
                </Typography>
            </div>
        </div>
        
        {placeholder && (
          <div className="color-field-label" onClick={handleClick}>
            <Typography type='body' className="data color-field-placeholder">{placeholder}</Typography>
          </div>
        )}
        
        <div
          className="color-icon-container icon-container"
          onClick={handleClick}
          aria-label="Open color picker"
        >
          <Palette />
        </div>
      </div>

      {isPickerVisible && (
        <ModalPortal container={container}>
          <ColorPicker
            defaultColor={defaultColor}
            userColors={userColors}
            onAddColor={onAddColor}
            onChange={handleChange}
            beginColor={color}
            onHide={handleClose}
          />
        </ModalPortal>
      )}
    </>
  );
};