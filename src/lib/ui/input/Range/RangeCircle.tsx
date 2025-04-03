import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Tooltip } from '../../Base/Tooltip/Tooltip';
import './Range.scss'
import { interpolateColor } from '../../../helpers/color/interpolateColor';
import { useColor } from '../../../hooks/color.hook';

interface CircleInputProps {
  colorBg?: string;
  colorRange?: string;
  pointColor?: string;
  min?: number;
  max?: number;
  value?: number;
  ariaLabel?: string
  showValue?: boolean;
  valueDisplayDuration?: number;
  onChange?: (value: number) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  children?: React.ReactNode
  styleTrack?: 'base' | 'static-color' | 'point'
  styleRange?: 'circle' | 'semicircle' | 'brokenCircle';
  strokeWidth?: number;
  radius?: number;
  showBase?: boolean;
  showIndicator?: boolean;
  showPoint?: boolean;
  rounding?: boolean;
  style?: React.CSSProperties;
  className?: string
  startColor?: string
}

const CircleInput: React.FC<CircleInputProps> = ({
  min = 0,
  max = 100,
  value = 0,
  onChange,
  onFocus,
  onBlur,
  styleRange = 'circle',
  styleTrack = 'base',
  strokeWidth = 20,
  radius = 100,
  colorBg = 'var(--Surface-container-color)',
  colorRange: _colorRange,
  pointColor: _pointColor,
  showBase = true,
  showIndicator: showIndicatorProps = true,
  showPoint:showPointProps = false,
  rounding = true,
  showValue = true,
  style,
  children,
  className,
  startColor
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);
  const width = (radius * 2)
  const height = (radius * 2)
  const minSide = Math.min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;
  const actualRadius = (minSide / 2) - strokeWidth / 2;

  const showIndicator = styleTrack === 'point'? false: showIndicatorProps
  const showPoint = styleTrack === 'point'? true: showPointProps

  const {colors} = useColor()
  const colorRange = _colorRange ?? colors.Primary_color ?? "#0000ff"
  const pointColor = _pointColor ?? colors.Primary_color ?? "#0000ff"

  const [val, setVal] = useState(value)

   // Синхронизация с внешним значением
    useEffect(() => {
    if (value !== undefined) {
        setVal(value);
    }
    }, [value]);

  const getAngleSize = useCallback(() => {
    switch (styleRange) {
      case 'semicircle': return 180;
      case 'brokenCircle': return 270;
      default: return 360;
    }
  },[styleRange])

  const getLineParams = useCallback(() => {
    if (styleRange === 'semicircle') {
      return [actualRadius * Math.PI, actualRadius * Math.PI];
    } else if (styleRange === 'brokenCircle') {
      return [actualRadius * Math.PI * 1.25, actualRadius * Math.PI * 1.5];
    }
    return [actualRadius * Math.PI, actualRadius * Math.PI * 2];
  },[styleRange, actualRadius])

  const percentage = useMemo(() => 
    max !== min ? ((val - min) / (max - min)) * 100 : 0,
    [val, min, max]
    );

  const paint = useCallback(() => {
    if (!svgRef.current) return;

    const [dashOffset, scaleSize] = getLineParams();
    const arc = ((val - min) * scaleSize) / (max - min);

    if (showBase) {
      const base = svgRef.current.querySelector('[data-el="base"]') as SVGCircleElement;
      if (base) {
        base.style.stroke = colorBg;
        base.style.strokeWidth = strokeWidth.toString();
        base.style.strokeLinecap = rounding ? 'round' : '';
        base.style.strokeDashoffset = dashOffset.toString();
        base.style.strokeDasharray = `${scaleSize}, ${actualRadius * Math.PI * 2 - scaleSize}`;
      }
    }

    if (showIndicator) {
      const indicator = svgRef.current.querySelector('[data-el="indicator"]') as SVGCircleElement;
      if (indicator) {

        const oldPercentage = parseFloat(indicator.dataset["percentage"] ?? "")
        if(oldPercentage !== null && (oldPercentage < percentage - 2 || oldPercentage > percentage + 2))
          indicator.style.transition = ".3s"
        else
          indicator.style.transition = isDragging.current? "none":".3s"
        indicator.dataset["percentage"] = percentage.toString()

        indicator.style.stroke = styleTrack === 'static-color'? colorRange : interpolateColor(percentage / 100, colorRange, startColor);
        indicator.style.strokeWidth = strokeWidth.toString();
        indicator.style.strokeLinecap = rounding ? 'round' : '';
        indicator.style.strokeDashoffset = dashOffset.toString();
        indicator.style.strokeDasharray = `${arc}, ${actualRadius * Math.PI * 2 - arc}`;
      }
    }

    if (showPoint) {
      const point = svgRef.current.querySelector('[data-el="point"]') as SVGCircleElement;
      if (point) {

        const oldPercentage = parseFloat(point.dataset["percentage"] ?? "")
        if(oldPercentage !== null && (oldPercentage < percentage - 2 || oldPercentage > percentage + 2))
          point.style.transition = ".3s"
        else
          point.style.transition = isDragging.current? "none":".3s"
        point.dataset["percentage"] = percentage.toString()

        point.style.stroke = pointColor;
        point.style.strokeWidth = strokeWidth.toString();
        point.style.strokeLinecap = 'round';
        
        if (val === max && styleRange === 'semicircle') {
          point.style.strokeDashoffset = '0';
        } else {
          point.style.strokeDashoffset = (dashOffset - arc).toString();
        }
        
        point.style.strokeDasharray = `0, ${actualRadius * Math.PI * 2}`;
      }
    }
  },[val, getLineParams, max, min, actualRadius, strokeWidth, colorBg, colorRange, pointColor, showBase, showIndicator, showPoint, rounding, percentage, startColor])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    updateValue(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault()
    if (!isDragging.current) return;
    updateValue(e);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const updateValue = useCallback((e: MouseEvent | React.MouseEvent) => {
    if (!svgRef.current) return;

    const angleSize = getAngleSize();
    const svgRect = svgRef.current.getBoundingClientRect();
    const centerX = svgRect.left + svgRect.width / 2;
    const centerY = svgRect.top + svgRect.height / 2;
    
    const posX = e.clientX;
    const posY = e.clientY;
    const deltaY = centerY - posY;
    const deltaX = centerX - posX;
    
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    if (angleSize === 270) angle += 45;

    if (angle < 0) angle = 360 + angle;
    if (angle < 0) angle = 0;
    
    if (angle > angleSize && val > (max - min) / 2) {
      angle = angleSize;
    } else if (angle > angleSize) {
        angle = 0;
    }

    const oldRange = angleSize;
    const newRange = max - min;
    const newValue = Math.round(((angle * newRange) / oldRange) + min);
    
    setVal(newValue)
    if (newValue !== value && onChange) {
      onChange(newValue);
    }
  },[getAngleSize, onChange, max, min, centerX, centerY, val])

  useEffect(() => {
    paint();
  }, [paint]);

  useEffect(()=>{
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
  },[])

  const ChildStyle = {
    '--stroke-width': `${strokeWidth}px`
  } as React.CSSProperties

  return (
    <div style={{ width, height, ...style }} className='range-circule-wrapper' onFocus={onFocus} onBlur={onBlur}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        onMouseDown={handleMouseDown}
      >
        {showBase && (
          <circle
            data-el="base"
            fill="none"
            cx={centerX}
            cy={centerY}
            r={actualRadius}
          />
        )}
        {showIndicator && (
          <circle
            data-el="indicator"
            fill="none"
            cx={centerX}
            cy={centerY}
            r={actualRadius}
          />
        )}
        {showPoint && (
          <circle
            data-el="point"
            fill="none"
            cx={centerX}
            cy={centerY}
            r={actualRadius}
          />
        )}
      </svg>
      <div className={`range-circule-children ${className}`} style={ChildStyle}>
        {
          children ?? (showValue &&
          <Tooltip className='' text={Math.floor(val).toString()}/>)
        }
      </div>
    </div>
  );
};

export default CircleInput;