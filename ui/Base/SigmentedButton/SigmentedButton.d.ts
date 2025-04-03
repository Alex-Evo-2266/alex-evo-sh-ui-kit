import { default as React } from '../../../../../node_modules/react';

export interface SigmentedButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (value: string[], event?: React.MouseEvent<HTMLInputElement>) => void;
    items: string[];
    value?: string[] | string;
    multiple?: boolean;
    style?: React.CSSProperties;
    name?: string;
    readOnly?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
}
export declare const SigmentedButton: ({ readOnly, ref, style, multiple, value, items, className, name, onClick, onContextMenu, onChange }: SigmentedButtonProps) => import("react/jsx-runtime").JSX.Element;
