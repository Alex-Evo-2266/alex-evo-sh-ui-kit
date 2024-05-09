import { default as React } from '../../../../node_modules/react';

export interface ExtendedFABProps {
    icon?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const FAB: ({ style, icon, className, onClick, onContextMenu, children }: ExtendedFABProps) => import("react/jsx-runtime").JSX.Element;
