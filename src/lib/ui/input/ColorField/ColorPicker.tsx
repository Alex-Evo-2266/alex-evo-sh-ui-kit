import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './ColorPicker.scss';
import {
  IColor,
  IColorRGB,
  initGradientHueSpectrum,
  initGradientShadeSpectrum,
  moveHueSpectrum,
  moveShadeSpectrum,
  updateHueCursor,
  updateSpectrumCursor,
} from './helpers/canvasColorPickerHelpers';
import {
  HEXtoRGB,
  HSVtoRGB,
  RGBtoHEX,
  RGBtoHSV,
} from '../../../helpers/color/colorConvert';
import { ModalDialogTemplate } from '../../Dialog/TemplateDialog/ModalDialogTemplate';

const DEFAULT_COLORS = [
  '#FFFFFF',
  '#FFFB0D',
  '#0532FF',
  '#FF9300',
  '#00F91A',
  '#FF2700',
  '#000000',
  '#686868',
  '#EE5464',
  '#D27AEE',
  '#5BA8C4',
  '#E64AA9',
];

const DEFAULT_COLOR = { h: 0, s: 1, v: 0.5 };

const getInitialColor = (beginColor?: string): IColor => {
  try {
    return beginColor ? RGBtoHSV(HEXtoRGB(beginColor)) : DEFAULT_COLOR;
  } catch {
    return DEFAULT_COLOR;
  }
};

interface ColorPickerProps {
  /** Callback при закрытии палитры */
  onHide?: () => void;
  /** Callback при изменении цвета */
  onChange?: (hexColor: string) => void;
  /** Начальный цвет */
  beginColor?: string;
  /** Пользовательские цвета */
  userColors?: string[];
  /** Callback при добавлении нового цвета */
  onAddColor?: (colors: string[]) => void;
  /** Цвет по умолчанию */
  defaultColor?: string;
  /** Ширина палитры */
  width?: number | string;
  /** Высота палитры */
  height?: number | string;

  autoHide?: boolean
}

/**
 * Компонент палитры цветов с поддержкой RGB/HEX, градиентным выбором и набором пресетов
 */
export const ColorPicker: React.FC<ColorPickerProps> = ({
  onHide,
  beginColor,
  onChange,
  onAddColor,
  autoHide,
  defaultColor,
  userColors = [],
  width = 310,
  height = 'auto',
}) => {
  const hueCanvas = useRef<HTMLCanvasElement>(null);
  const hueCursor = useRef<HTMLButtonElement>(null);
  const spectrumCanvas = useRef<HTMLCanvasElement>(null);
  const spectrumCursor = useRef<HTMLButtonElement>(null);

  const [color, setColor] = useState<IColor>(getInitialColor(beginColor));
  const [hexMode, setHexMode] = useState<boolean>(false);
  const [hexColorBuff, setHexColorBuff] = useState<string>(
    `#${RGBtoHEX(HSVtoRGB(color))}`
  );

  const rgbColor: IColorRGB = useMemo(() => HSVtoRGB(color), [color]);
  const hexColor: string = useMemo(() => `#${RGBtoHEX(rgbColor)}`, [rgbColor]);
  const formattedHexColor: string = useMemo(
    () => (hexColorBuff[0] !== '#' ? `#${hexColorBuff}` : hexColorBuff),
    [hexColorBuff]
  );

  // Обновление позиций курсоров при изменении цвета
  useEffect(() => {
    if (!spectrumCanvas.current || !hueCanvas.current || !hueCursor.current || !spectrumCursor.current)
      return;

    colorToCords(
      spectrumCanvas.current,
      spectrumCursor.current,
      hueCanvas.current,
      hueCursor.current,
      color
    );
  }, [color]);

  // Инициализация спектра оттенков
  useEffect(() => {
    if (!spectrumCanvas.current || !spectrumCursor.current) return;
    
    const spectrumCtx = spectrumCanvas.current.getContext('2d');
    if (!spectrumCtx) return;

    initGradientShadeSpectrum(
      spectrumCtx,
      spectrumCanvas.current,
      `#${RGBtoHEX(HSVtoRGB(color.h, 1, 1))}`
    );

    moveShadeSpectrum(
      spectrumCanvas.current,
      spectrumCtx,
      spectrumCursor.current,
      (s, v) => {
        setColor((prev) => {
          const newColor = { ...prev, s: s / 100, v: v / 100 };
          setHexColorBuff(RGBtoHEX(HSVtoRGB(newColor)));
          return newColor;
        });
      }
    );
  }, [color.h]);

  // Инициализация спектра hue
  useEffect(() => {
    if (!hueCanvas.current || !hueCursor.current) return;
    
    const hueCtx = hueCanvas.current.getContext('2d');
    if (!hueCtx) return;

    initGradientHueSpectrum(hueCtx, hueCanvas.current);
    moveHueSpectrum(hueCtx, hueCanvas.current, hueCursor.current, (hue) => {
      setColor((prev) => {
        const newColor = { ...prev, h: hue / 360 };
        setHexColorBuff(RGBtoHEX(HSVtoRGB(newColor)));
        return newColor;
      });
    });
  }, []);

  // Обновление цвета при изменении HEX
  useEffect(() => {
    if (hexColorBuff.length === 4 || hexColorBuff.length === 7) {
      try {
        setColor(RGBtoHSV(HEXtoRGB(hexColorBuff)));
      } catch (e) {
        console.warn('Invalid HEX color');
      }
    }
  }, [hexColorBuff]);

  const colorToCords = (
    spectrumCanvas: HTMLCanvasElement,
    spectrumCursor: HTMLButtonElement,
    hueCanvas: HTMLCanvasElement,
    hueCursor: HTMLButtonElement,
    color: IColor
  ) => {
    try {
      const spectrumRect = spectrumCanvas.getBoundingClientRect();
      const hueRect = hueCanvas.getBoundingClientRect();
      
      const x = Math.round(color.s * spectrumRect.width);
      const y = Math.round((1 - color.v) * spectrumRect.height);
      const z = ((360 - color.h * 360) / 360) * hueRect.height;
      
      updateSpectrumCursor(spectrumCursor, x, y);
      updateHueCursor(hueCursor, z);
    } catch (e) {
      console.error('Error updating cursor positions', e);
    }
  };

  const handleColorChange = (hex: string) => {
    try {
      setColor(RGBtoHSV(HEXtoRGB(hex)));
      setHexColorBuff(hex);
    } catch (e) {
      console.warn('Invalid color format');
    }
  };

  const handleAddColor = useCallback(() => {
    onAddColor?.([...userColors, hexColor]);
  }, [onAddColor, userColors, hexColor]);

  const handleColorSelect = useCallback(() => {
    onChange?.(hexColor);
    if(autoHide)
        onHide?.()
  }, [onChange, hexColor]);

  const handleRgbChange = useCallback(
    (name: 'r' | 'g' | 'b', value: number) => {
      const clampedValue = Math.min(255, Math.max(0, value));
      setColor(RGBtoHSV({ ...rgbColor, [name]: clampedValue }));
      setHexColorBuff(RGBtoHEX({ ...rgbColor, [name]: clampedValue }));
    },
    [rgbColor]
  );

  const handleHexChange = useCallback((value: string) => {
    setHexColorBuff(value);
  }, []);

  const handleSetDefault = useCallback(() => {
    if (defaultColor) {
      onChange?.(defaultColor);
      if(autoHide)
        onHide?.()
      handleColorChange(defaultColor)
    }
  }, [defaultColor, onChange, handleColorChange]);

  return (
    <ModalDialogTemplate
      className="color-picker-panel"
      onHide={onHide}
      clearStyle
      style={{ width, height }}
    >
      <div className="panel-row" style={{ padding: 0 }}>
        <div className="swatches default-swatches">
          {DEFAULT_COLORS.map((item, index) => (
            <button
              onClick={() => handleColorChange(item)}
              className="swatch"
              key={index}
              style={{ backgroundColor: item }}
              aria-label={`Color ${item}`}
            />
          ))}
        </div>
        <button
          className="button-color-picker eyedropper"
          onClick={handleColorSelect}
          aria-label="Select color"
        >
          Get Color
        </button>
      </div>

      <div className="panel-row" style={{ padding: 0 }}>
        <div className="spectrum-map spectrum-cursor">
          <button
            ref={spectrumCursor}
            className="color-cursor spectrum-cursor"
            aria-hidden="true"
          />
          <canvas
            ref={spectrumCanvas}
            className="spectrum-canvas spectrum-canvas-color-picker"
            aria-label="Color spectrum"
          />
        </div>
        <div className="hue-map">
          <button
            ref={hueCursor}
            className="color-cursor hue-cursor"
            aria-hidden="true"
          />
          <canvas
            ref={hueCanvas}
            className="hue-canvas hue-canvas-color-picker"
            aria-label="Hue spectrum"
          />
        </div>
      </div>

      <div className="panel-row" style={{ padding: 0 }}>
        <div className={`field-group value-fields rgb-fields ${hexMode ? '' : 'active'}`}>
          {['r', 'g', 'b'].map((channel) => (
            <div className="field-group" key={channel}>
              <label className="field-label">{channel.toUpperCase()}:</label>
              <input
                type="number"
                max="255"
                min="0"
                value={rgbColor[channel as 'r' | 'g' | 'b']}
                onChange={(e) =>
                  handleRgbChange(channel as 'r' | 'g' | 'b', Number(e.target.value))
                }
                className="field-input rgb-input"
                aria-label={`${channel.toUpperCase()} value`}
              />
            </div>
          ))}
        </div>

        <div className={`field-group value-fields hex-field ${hexMode ? 'active' : ''}`}>
          <label className="field-label">Hex:</label>
          <input
            type="text"
            className="field-input"
            value={formattedHexColor}
            onChange={(e) => handleHexChange(e.target.value)}
            aria-label="HEX color value"
          />
        </div>

        <button
          className="button-color-picker mode-toggle"
          onClick={() => setHexMode((prev) => !prev)}
          aria-label={`Switch to ${hexMode ? 'RGB' : 'HEX'} mode`}
        >
          Mode
        </button>
      </div>

      {userColors.length > 0 && (
        <div className="panel-row" style={{ padding: 0 }}>
          <h2 className="panel-header">User Colors</h2>
          <div id="user-swatches" className="swatches custom-swatches">
            {userColors.map((item, index) => (
              <button
                onClick={() => handleColorChange(item)}
                className="swatch"
                key={index}
                style={{ backgroundColor: item }}
                aria-label={`User color ${item}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="panel-row" style={{ padding: 0 }}>
        <button
          onClick={handleAddColor}
          className="button-color-picker add-swatch"
          aria-label="Add current color to swatches"
        >
          <span
            style={{ backgroundColor: hexColor }}
            className="color-indicator"
          />
          <span>Add to Swatches</span>
        </button>

        {defaultColor && (
          <button
            onClick={handleSetDefault}
            className="button-color-picker add-swatch"
            aria-label="Set default color"
          >
            <span
              style={{ backgroundColor: defaultColor }}
              className="color-indicator"
            />
            <span>Set default</span>
          </button>
        )}
      </div>
    </ModalDialogTemplate>
  );
};