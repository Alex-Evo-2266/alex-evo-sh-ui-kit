import { ScreenSize } from "../../model/sizeScreen";

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

export const FountSize: Record<ScreenSize, string> = {
    [ScreenSize.MOBILE]: "small-screen",
    [ScreenSize.STANDART]: "standart-screen",
    [ScreenSize.BIG_SCREEN]: "big-screen",
};
  
export const getFontVar = (
    type: TypographyType, 
    screenSize: ScreenSize = ScreenSize.STANDART
): string => `var(--${type}-${FountSize[screenSize]})`;
  
export const getWeightVar = (
    type: TypographyType, 
    weight: TypographyWeight = 'standart'
): string => `var(--${type}-${weight})`;
  
export const getLineHeightVar = (
    type: TypographyType, 
    density: TypographyDensity = 'normal', 
    screenSize: ScreenSize = ScreenSize.STANDART
): string => `var(--${type}-heights-${FountSize[screenSize]}-${density})`;