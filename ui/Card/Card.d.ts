
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
}
export declare const Card: ({ className, action, imgSrc, alt, header, subhead, text, children, iconButtonCell, onClick }: CardProps) => import("react/jsx-runtime").JSX.Element;
