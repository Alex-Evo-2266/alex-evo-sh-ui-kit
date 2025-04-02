import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Range.scss';
import { useColor } from '../../../hooks/color.hook';

export interface ColorSliderProps {
  colorRange?: string;
  colorBg?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  ariaLabel?: string
  orientation?: 'horizontal' | 'vertical';
  showValue?: boolean;
  valueDisplayDuration?: number;
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  styleTrack?: 'base' | 'static-color' | 'point'
}

export enum PopupState {
  OPEN,
  HIDING,
  CLOSE
}

const WIDTH = "var(--range-width)"

export const Range: React.FC<ColorSliderProps> = ({
  colorRange: _colorRange,
  colorBg = "var(--Surface-container-color)",
  onChange,
  min = 0,
  max = 100,
  step = 1,
  width = "40px",
  value: propValue,
  orientation = 'horizontal',
  styleTrack = 'base',
  showValue = true,
  valueDisplayDuration = 2000,
  ariaLabel = "Регулятор значения",
  ...props
}) => {
  const range = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number>(propValue ?? min);
  const [popupState, setPopupState] = useState<PopupState>(PopupState.CLOSE);
  const [height, setHeight] = useState<string>('200px');
  const timeoutRef = useRef<number>();
  const hideTimeoutRef = useRef<number>();
  const {colors} = useColor()

  const colorRange = _colorRange ?? colors.Primary_color ?? "#0000ff"

  // Обновляем высоту при изменении ориентации или размера родителя
  useEffect(() => {
	if (orientation === 'vertical' && wrapperRef.current?.parentElement) {
	  const updateHeight = () => {
		const parentHeight = wrapperRef.current?.parentElement?.clientHeight;
		if (parentHeight) {
		  setHeight(`${parentHeight}px`);
		}
	  };

	  updateHeight();

	  // Добавляем ResizeObserver для отслеживания изменений размера
	  const resizeObserver = new ResizeObserver(updateHeight);
	  if (wrapperRef.current.parentElement) {
		resizeObserver.observe(wrapperRef.current.parentElement);
	  }

	  return () => resizeObserver.disconnect();
	}
  }, [orientation]);

  // Очистка таймеров при размонтировании
  useEffect(() => {
	return () => {
	  if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
	  if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
	};
  }, []);

  // Синхронизация с внешним значением
  useEffect(() => {
	if (propValue !== undefined) {
	  setValue(propValue);
	  showValuePopup();
	}
  }, [propValue]);

  const showValuePopup = () => {
	if (!showValue) return;
	
	setPopupState(PopupState.OPEN);
	
	if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
	if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
	
	timeoutRef.current = window.setTimeout(() => {
	  setPopupState(PopupState.HIDING);
	  hideTimeoutRef.current = window.setTimeout(() => {
		setPopupState(PopupState.CLOSE);
	  }, 500);
	}, valueDisplayDuration);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const newValue = parseFloat(e.target.value);
	setValue(newValue);
	showValuePopup();
	onChange?.(e);
  };

  const interpolateColor = useCallback((factor: number): string => {
	if (styleTrack === 'static-color') return colorRange;
	if (factor === 0) return "var(--surface-color, #e0e0e0)";
	if (factor === 1) return colorRange;

	const r1 = 224, g1 = 224, b1 = 224;
	const r2 = parseInt(colorRange.substring(1, 3), 16);
	const g2 = parseInt(colorRange.substring(3, 5), 16);
	const b2 = parseInt(colorRange.substring(5, 7), 16);

	const r = Math.round(r1 + factor * (r2 - r1));
	const g = Math.round(g1 + factor * (g2 - g1));
	const b = Math.round(b1 + factor * (b2 - b1));

	return `rgb(${r}, ${g}, ${b})`;
  }, [colorRange]);

  const percentage = useMemo(() => 
	max !== min ? ((value - min) / (max - min)) * 100 : 0,
	[value, min, max]
  );

  const activeTrackStyle = useMemo(() => ({
	...props.style,
	[orientation === 'vertical' ? 'height' : 'width']: `${percentage}%`,
	background: styleTrack === 'point'? "transperent" :interpolateColor(percentage / 100),
  }), [percentage, interpolateColor, props.style, orientation, styleTrack]);

  const wrapperStyle = useMemo(() => {
	if (orientation === 'vertical') {
		return { 
			'--range-width': width,
			'--point-width': styleTrack === 'point'? width : '6px',
    		'--point-opacity': styleTrack === 'point'? '1' : '0',
			'--truck-color': colorRange,
			width: WIDTH, 
			height: height,
			margin: '0 20px',
			...props.style
		};
	}
	return { 
		'--range-width': width,
		'--point-width': styleTrack === 'point'? width : '6px',
		'--point-opacity': styleTrack === 'point'? '1' : '0',
		'--truck-color': colorRange,
		width: '100%', 
		height: WIDTH,
		margin: `${WIDTH} 0`,
		...props.style
	};
  }, [orientation, height, props.style, width, styleTrack, colorRange]);

  const rangeInputStyle = useMemo(() => {
	if (orientation === 'vertical') {
		return {
			width: height
		}
	}
	return {
		width: "100%"
	}
  }, [orientation, height])

  return (
	// <div style={{height: "400px", width: "500px"}}>
	<div 
	  ref={wrapperRef}
	  className={`range-wrapper ${orientation}`}
	  style={wrapperStyle}
	>
	  <div className="track" style={{background: colorBg}}>
		<div className="active-track" style={activeTrackStyle} />
		{popupState !== PopupState.CLOSE && (
		  <div 
			className={`value-popup ${popupState === PopupState.HIDING ? "hiding" : ""}`}
			aria-live="polite"
			aria-atomic="true"
		  >
			{Math.round(value)}
		  </div>
		)}
	  </div>
	  <input
		ref={range}
		type="range"
		min={min}
		style={rangeInputStyle}
		max={max}
		step={step}
		value={value}
		onChange={handleSliderChange}
		className="slider-input"
		aria-orientation={orientation}
		aria-valuenow={value}
		aria-valuemin={min}
		aria-valuemax={max}
		aria-label={ariaLabel}
		aria-valuetext={`${value} из ${max}`}
		{...props}
	  />
	</div>
	//</div>
  );
};