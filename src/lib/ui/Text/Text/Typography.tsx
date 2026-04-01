import React, { forwardRef, HTMLAttributes, useContext } from "react";
import { ScreenSize } from "../../../model/sizeScreen";
import './Text.scss';
import { getFontVar, getLineHeightVar, getWeightVar, TypographyDensity, TypographyType, TypographyWeight } from "../textProps";
import { SizeContext } from "../../Provider/SizeProvider";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
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

}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(({
  type,
  screensize = ScreenSize.STANDART,
  weight = 'standart',
  density = 'normal',
  children,
  style,
  className = '',
  ...props
},ref) => {
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
      ref={ref}
      {...props}
      style={typographyStyle}
      className={`${baseClass} ${className}`}
    >
      {children}
    </Component>
  );
})