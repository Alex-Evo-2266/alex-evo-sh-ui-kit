import React, { useContext } from "react";
import { ScreenSize } from "../../../model/sizeScreen";
import './Text.scss';
import { getFontVar, getLineHeightVar, getWeightVar, TypographyDensity, TypographyType, TypographyWeight } from "../textProps";
import { SizeContext } from "../../Provider/SizeProvider";

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
  const size = useContext(SizeContext)
  const screen = size? size.screen: screensize
  const isHeading = type === "heading" || type === "title" || type === "title-2";
  const Component = isHeading ? 'h3' : 'span';
  
  const typographyStyle = {
    fontSize: getFontVar(type, screen),
    fontWeight: getWeightVar(type, weight),
    lineHeight: getLineHeightVar(type, density, screen),
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