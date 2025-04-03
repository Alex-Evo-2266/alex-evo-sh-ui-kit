import { ScreenSize } from '../../model/sizeScreen';

export interface CardProps {
    className?: string;
    action?: React.ReactNode;
    imgSrc?: string;
    alt?: string;
    header?: string;
    subhead?: string;
    text?: string;
    children?: React.ReactNode;
    iconButtonCell?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    screenSize?: ScreenSize;
    style?: React.CSSProperties;
    rootApp?: string;
}
export declare const Card: ({ style, className, action, imgSrc, alt, header, subhead, text, children, iconButtonCell, onClick, screenSize: screenProps, rootApp }: CardProps) => import("react/jsx-runtime").JSX.Element;
