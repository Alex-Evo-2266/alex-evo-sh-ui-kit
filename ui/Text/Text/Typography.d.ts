import { HeadingProps, TextProps } from './TextProps';

type TypographyTypeHeader = "title" | "title-2" | "heading";
type TypographyTypeBase = "body" | "small";
type TypographyWeight = "thin" | "standart" | "bold";
type TypographyDensity = "tight" | "normal" | "loose";
interface ITypographyBase extends TextProps {
    type: TypographyTypeBase;
    weight?: TypographyWeight;
    density?: TypographyDensity;
    children?: React.ReactNode;
}
interface ITypographyHeader extends HeadingProps {
    type: TypographyTypeHeader;
    weight?: TypographyWeight;
    density?: TypographyDensity;
    children?: React.ReactNode;
}
type ITypography = ITypographyBase | ITypographyHeader;
export declare const Typography: (props: ITypography) => import("react/jsx-runtime").JSX.Element;
export {};
