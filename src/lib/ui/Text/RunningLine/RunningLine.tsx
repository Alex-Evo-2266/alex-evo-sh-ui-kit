import React, { useEffect, useCallback, useRef, useState } from 'react';
import "./runningLine.scss";
import "../Text/Text.scss";
import {
  getFontVar,
  getLineHeightVar,
  getWeightVar,
  TypographyDensity,
  TypographyType,
  TypographyWeight
} from '../textProps';
import { ScreenSize } from '../../../model/sizeScreen';

export interface RunningLineProps {
  type: TypographyType;
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

  const isHeading = type === "heading" || type === "title" || type === "title-2";
  const Component = isHeading ? 'h3' : 'span';

  const typographyStyle = {
    fontSize: getFontVar(type, screensize),
    fontWeight: getWeightVar(type, weight),
    lineHeight: getLineHeightVar(type, density, screensize),
    ...style,
  };

  const baseClass = isHeading ? 'typography-heading' : 'typography-text';

  const anim = useCallback(() => {
    if (!containerRef.current || !measurerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const textWidth = measurerRef.current.scrollWidth;

    setIsAnimated(containerWidth < textWidth);
  }, [text]);

  useEffect(() => {
    anim();
    window.addEventListener('resize', anim);
    return () => {
      window.removeEventListener('resize', anim);
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
        <Component
          {...props}
          style={typographyStyle}
          className={`${baseClass} ${className}`}
        >
          {isAnimated ? `| ${text} | ${text}` : text}
        </Component>
      </div>

      {/* Невидимый измеритель */}
      <div
        ref={measurerRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 'auto',
          whiteSpace: 'nowrap',
          ...typographyStyle,
        }}
        className={`${baseClass} ${className}`}
      >
        {text}
      </div>
    </>
  );
};
