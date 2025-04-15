import React, { useState, useEffect, useRef, useCallback, useMemo, useContext } from 'react';
import './Range.scss';
import { Tooltip } from '../../Base/Tooltip/Tooltip';
import { interpolateColor } from '../../../helpers/color/interpolateColor'
import { usePopup } from '../../Base/Tooltip/hooks/Tooltip';
import { ColorContext } from '../../Base/ColorProvider';

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
  strokeWidth?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  styleTrack?: 'base' | 'static-color' | 'point'
  startColor?: string
  className?: string
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
  strokeWidth = "40px",
  value: propValue,
  orientation = 'horizontal',
  styleTrack = 'base',
  showValue = true,
  valueDisplayDuration = 2000,
  ariaLabel = "Регулятор значения",
  startColor,
  className = "",
  ...props
}) => {
  const range = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number>(propValue ?? min);
  const [height, setHeight] = useState<string>('200px');
  const {colors} = useContext(ColorContext)
  const {showPopup, popupState} = usePopup({valueDisplayDuration})

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

  // Синхронизация с внешним значением
  useEffect(() => {
	if (propValue !== undefined) {
	  setValue(propValue);
	  showValuePopup();
	}
  }, [propValue]);

  const showValuePopup = useCallback(() => {
	if (!showValue) return;
	showPopup()
  },[showPopup])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const newValue = parseFloat(e.target.value);
	setValue(newValue);
	showValuePopup();
	onChange?.(e);
  };


  const percentage = useMemo(() => 
	max !== min ? ((value - min) / (max - min)) * 100 : 0,
	[value, min, max]
  );

  const activeTrackStyle = useMemo(() => ({
	...props.style,
	[orientation === 'vertical' ? 'height' : 'width']: `${percentage}%`,
	background: styleTrack === 'point'? "transperent" : styleTrack === 'static-color'? colorRange : interpolateColor(percentage / 100, colorRange, startColor),
  }), [percentage, colorRange, props.style, orientation, styleTrack]);

  const wrapperStyle = useMemo(() => {
	if (orientation === 'vertical') {
		return { 
			'--range-width': strokeWidth,
			'--point-width': styleTrack === 'point'? strokeWidth : '6px',
    		'--point-opacity': styleTrack === 'point'? '1' : '0',
			'--truck-color': colorRange,
			width: WIDTH, 
			height: height,
			margin: '0 20px',
			...props.style
		};
	}
	return { 
		'--range-width': strokeWidth,
		'--point-width': styleTrack === 'point'? strokeWidth : '6px',
		'--point-opacity': styleTrack === 'point'? '1' : '0',
		'--truck-color': colorRange,
		width: '100%', 
		height: WIDTH,
		margin: `${WIDTH} 0`,
		...props.style
	};
  }, [orientation, height, props.style, strokeWidth, styleTrack, colorRange]);

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
	<div 
	  ref={wrapperRef}
	  className={`range-wrapper ${orientation} ${className}`}
	  style={wrapperStyle}
	>
	  <div className="track" style={{background: colorBg}}>
		<div className="active-track" style={activeTrackStyle} />
		<Tooltip text={Math.round(value).toString()} state={popupState} className='value-popup'/>
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
		onFocus={props.onFocus}
		onBlur={props.onBlur}
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
  );
};