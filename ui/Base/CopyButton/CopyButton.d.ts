
export interface IconButtonProps {
    text: string;
    supportText?: boolean;
    className?: string;
    classNameContainer?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    transparent?: boolean;
}
export declare const CopyButton: ({ transparent, className, onClick, onContextMenu, disabled, classNameContainer, style, text, supportText }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
