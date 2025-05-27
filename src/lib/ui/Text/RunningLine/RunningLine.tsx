import React,{useEffect,useCallback, useRef, useState} from 'react'
import "./runningLine.scss"
import "../Text/Text.scss"
import { getFontVar, getLineHeightVar, getWeightVar, TypographyDensity, TypographyType, TypographyWeight } from '../textProps'
import { ScreenSize } from '../../../model/sizeScreen'

export interface RunningLineProps {
  /** Тип текстового элемента */
  type: TypographyType;
  /** Размер экрана для адаптации */
  screensize?: ScreenSize;
  /** Насыщенность шрифта */
  weight?: TypographyWeight;
  /** Межстрочный интервал */
  density?: TypographyDensity;
  text: string;
  onClick?:(event:React.MouseEvent<HTMLDivElement>)=>void;
  onContextMenu?: (event:React.MouseEvent<HTMLDivElement>)=>void;
  /** HTML-атрибуты для span/heading элементов */
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
  const textContainer = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const isHeading = type === "heading" || type === "title" || type === "title-2";
  const Component = isHeading ? 'h3' : 'span';

  const anim = useCallback(() => {
    if (!textContainer.current) return;
    const el = textContainer.current.querySelector("span, h3");
    if (el && textContainer.current.clientWidth <= el.scrollWidth) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [text]);

  useEffect(() => {
    anim();
    window.addEventListener("resize", anim);
    return () => window.removeEventListener("resize", anim);
  }, [anim]);

  const typographyStyle = {
    fontSize: getFontVar(type, screensize),
    fontWeight: getWeightVar(type, weight),
    lineHeight: getLineHeightVar(type, density, screensize),
    ...style,
  };

  const baseClass = isHeading ? 'typography-heading' : 'typography-text';

  return (
    <div
      ref={textContainer}
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
  );
};
