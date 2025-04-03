import { ScreenSize } from '../../../model/sizeScreen';

type spanProps = React.HTMLAttributes<HTMLSpanElement>;
type HProps = React.HTMLAttributes<HTMLHeadingElement>;
export interface TextProps extends spanProps {
    screensize?: ScreenSize;
}
export interface HeadingProps extends HProps {
    screensize?: ScreenSize;
}
export interface TextOption {
    [ScreenSize.MOBILE]: string;
    [ScreenSize.STANDART]: string;
    [ScreenSize.BIG_SCREEN]: string;
}
export {};
