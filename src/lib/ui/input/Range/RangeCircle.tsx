import React, { useCallback, useEffect, useRef, useState } from 'react';

interface CircleInputProps {
  width?: number;
  height?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  style?: 'circle' | 'semicircle' | 'brokenCircle';
  strokeWidth?: number;
  radius?: number;
  baseColor?: string;
  indicatorColor?: string;
  pointColor?: string;
  showBase?: boolean;
  showIndicator?: boolean;
  showPoint?: boolean;
  rounding?: boolean;
}

const CircleInput: React.FC<CircleInputProps> = ({
  width = 200,
  height = 200,
  min = 0,
  max = 100,
  value = 0,
  onChange,
  style = 'circle',
  strokeWidth = 20,
  radius,
  baseColor = '#eee',
  indicatorColor = '#f00',
  pointColor = '#f00',
  showBase = true,
  showIndicator = true,
  showPoint = true,
  rounding = false,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);
  const minSide = Math.min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;
  const actualRadius = radius || (minSide / 2) - strokeWidth / 2;

  const [val, setVal] = useState(value)

   // Синхронизация с внешним значением
    useEffect(() => {
    if (value !== undefined) {
        setVal(value);
    }
    }, [value]);

  const getAngleSize = useCallback(() => {
    switch (style) {
      case 'semicircle': return 180;
      case 'brokenCircle': return 270;
      default: return 360;
    }
  },[style])

  const getLineParams = useCallback(() => {
    if (style === 'semicircle') {
      return [actualRadius * Math.PI, actualRadius * Math.PI];
    } else if (style === 'brokenCircle') {
      return [actualRadius * Math.PI * 1.25, actualRadius * Math.PI * 1.5];
    }
    return [actualRadius * Math.PI, actualRadius * Math.PI * 2];
  },[style, actualRadius])

  const paint = useCallback(() => {
    if (!svgRef.current) return;

    const [dashOffset, scaleSize] = getLineParams();
    const arc = ((val - min) * scaleSize) / (max - min);

    if (showBase) {
      const base = svgRef.current.querySelector('[data-el="base"]') as SVGCircleElement;
      if (base) {
        base.style.stroke = baseColor;
        base.style.strokeWidth = strokeWidth.toString();
        base.style.strokeLinecap = rounding ? 'round' : '';
        base.style.strokeDashoffset = dashOffset.toString();
        base.style.strokeDasharray = `${scaleSize}, ${actualRadius * Math.PI * 2 - scaleSize}`;
      }
    }

    if (showIndicator) {
      const indicator = svgRef.current.querySelector('[data-el="indicator"]') as SVGCircleElement;
      if (indicator) {
        indicator.style.stroke = indicatorColor;
        indicator.style.strokeWidth = strokeWidth.toString();
        indicator.style.strokeLinecap = rounding ? 'round' : '';
        indicator.style.strokeDashoffset = dashOffset.toString();
        indicator.style.strokeDasharray = `${arc}, ${actualRadius * Math.PI * 2 - arc}`;
      }
    }

    if (showPoint) {
      const point = svgRef.current.querySelector('[data-el="point"]') as SVGCircleElement;
      if (point) {
        point.style.stroke = pointColor;
        point.style.strokeWidth = strokeWidth.toString();
        point.style.strokeLinecap = 'round';
        
        if (val === max && style === 'semicircle') {
          point.style.strokeDashoffset = '0';
        } else {
          point.style.strokeDashoffset = (dashOffset - arc).toString();
        }
        
        point.style.strokeDasharray = `0, ${actualRadius * Math.PI * 2}`;
      }
    }
  },[val, getLineParams, max, min, actualRadius, strokeWidth, baseColor, indicatorColor, pointColor, showBase, showIndicator, showPoint, rounding])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    updateValue(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
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
    
    console.log("p0",angle, val, (max - min) / 2)
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

  return (
    <div style={{ width, height }}>
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
    </div>
  );
};

export default CircleInput;