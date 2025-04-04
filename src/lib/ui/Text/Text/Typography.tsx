import React from "react";
import { ScreenSize } from "../../../model/sizeScreen";
import './Text.scss';

export type TypographyType = 
  | "title" 
  | "title-2" 
  | "heading"
  | "body" 
  | "small";

export type TypographyWeight = 
  | "thin" 
  | "standart" 
  | "bold";

export type TypographyDensity = 
  | "tight" 
  | "normal" 
  | "loose";

export interface TypographyProps {
  /** Тип текстового элемента */
  type: TypographyType;
  /** Размер экрана для адаптации */
  screensize?: ScreenSize;
  /** Насыщенность шрифта */
  weight?: TypographyWeight;
  /** Межстрочный интервал */
  density?: TypographyDensity;
  /** Дочерние элементы */
  children?: React.ReactNode;
  /** HTML-атрибуты для span/heading элементов */
  [key: string]: any;
}

const FountSize: Record<ScreenSize, string> = {
  [ScreenSize.MOBILE]: "small-screen",
  [ScreenSize.STANDART]: "standart-screen",
  [ScreenSize.BIG_SCREEN]: "big-screen",
};

const getFontVar = (
  type: TypographyType, 
  screenSize: ScreenSize = ScreenSize.STANDART
): string => `var(--${type}-${FountSize[screenSize]})`;

const getWeightVar = (
  type: TypographyType, 
  weight: TypographyWeight = 'standart'
): string => `var(--${type}-${weight})`;

const getLineHeightVar = (
  type: TypographyType, 
  density: TypographyDensity = 'normal', 
  screenSize: ScreenSize = ScreenSize.STANDART
): string => `var(--${type}-heights-${FountSize[screenSize]}-${density})`;

export const Typography: React.FC<TypographyProps> = ({
  type,
  screensize = ScreenSize.STANDART,
  weight = 'standart',
  density = 'normal',
  children,
  style,
  className = '',
  ...props
}) => {
  const isHeading = type === "heading" || type === "title" || type === "title-2";
  const Component = isHeading ? 'h3' : 'span';
  
  const typographyStyle = {
    fontSize: getFontVar(type, screensize),
    fontWeight: getWeightVar(type, weight),
    lineHeight: getLineHeightVar(type, density, screensize),
    ...style,
  };

  const baseClass = isHeading 
    ? 'typography-heading' 
    : 'typography-text';

  return (
    <Component
      {...props}
      style={typographyStyle}
      className={`${baseClass} ${className}`}
    >
      {children}
    </Component>
  );
};