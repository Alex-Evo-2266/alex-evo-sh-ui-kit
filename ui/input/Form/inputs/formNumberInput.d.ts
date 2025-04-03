/// <reference types="react" />
export interface TextFieldProps {
    ref?: React.RefObject<HTMLInputElement>;
    border?: boolean;
    readOnly?: boolean;
    transparent?: boolean;
    styleContainer?: React.CSSProperties;
    icon?: React.ReactNode;
    clear?: boolean;
    className?: string;
    placeholder?: string;
    name: string;
    min?: number;
    max?: number;
}
export declare const NumberField: ({ ref, border, readOnly, transparent, styleContainer, icon, clear, className, placeholder, name, min, max }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
