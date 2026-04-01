import React, { useEffect, useCallback, useRef, useState } from 'react';
import "./runningLine.scss";
import "../Text/Text.scss";
import {
  TypographyDensity,
  TypographyWeight
} from '../textProps';
import { ScreenSize } from '../../../model/sizeScreen';
import { Typography, TypographyProps } from '../Text/Typography';

export interface RunningLineProps extends TypographyProps {
  screensize?: ScreenSize;
  weight?: TypographyWeight;
  density?: TypographyDensity;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
  [key: string]: any;
}

export const RunningLine: React.FC<RunningLineProps> = ({
  type,
  screensize = ScreenSize.STANDART,
  weight = 'standart',
  density = 'normal',
  className = '',
  text,
  style,
  onClick,
  onContextMenu,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measurerRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const anim = useCallback(() => {
    if (!containerRef.current || !measurerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const textWidth = measurerRef.current.scrollWidth;

    setIsAnimated(containerWidth < textWidth);
  }, [text]);

  useEffect(() => {
    anim();
    
    // Следим за изменением размеров окна
    window.addEventListener('resize', anim);
    
    // Следим за изменением размеров родителя
    let resizeObserver: ResizeObserver | null = null;
    
    if (containerRef.current?.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        anim();
      });
      resizeObserver.observe(containerRef.current.parentElement);
    }
    
    return () => {
      window.removeEventListener('resize', anim);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [anim]);
  
  return (
    <>
      {/* Видимая бегущая строка */}
      <div
        ref={containerRef}
        onClick={onClick}
        onContextMenu={onContextMenu}
        className={`runing-text ${isAnimated ? 'runing' : ''}`}
      >
        <Typography
          {...props}
          type={type}
          className={`${className}`}
        >
          {isAnimated ? `| ${text} | ${text}` : text}
        </Typography>
      </div>

      {/* Невидимый измеритель */}
      <Typography
        ref={measurerRef}
        {...props}
        type={type}
        style={{
          ...props.style,
          position: 'absolute',
          visibility: 'hidden',
          height: 'auto',
          whiteSpace: 'nowrap',
        }}
        className={className}
      >
        {text}
      </Typography>
    </>
  );
};
