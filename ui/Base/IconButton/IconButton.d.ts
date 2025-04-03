import { default as React } from '../../../../../node_modules/react';

export interface IconButtonProps {
    icon: React.ReactNode;
    className?: string;
    classNameContainer?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    transparent?: boolean;
}
export declare const IconButton: ({ transparent, icon, className, onClick, onContextMenu, disabled, classNameContainer, style }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
