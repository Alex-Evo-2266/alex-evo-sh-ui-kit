import { default as React } from '../../../../node_modules/react';

export interface SigmentedButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChange?: (value: string[], event?: React.MouseEvent<HTMLButtonElement>) => void;
    items: string[];
    value?: string[] | string;
    multiple?: boolean;
}
export declare const SigmentedButton: ({ multiple, value, items, className, onClick, onContextMenu, onChange }: SigmentedButtonProps) => import("react/jsx-runtime").JSX.Element;
