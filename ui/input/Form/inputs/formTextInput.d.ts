/// <reference types="react" />
export interface TextFieldProps {
    password?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
    border?: boolean;
    readOnly?: boolean;
    transparent?: boolean;
    styleContainer?: React.CSSProperties;
    error?: boolean;
    icon?: React.ReactNode;
    clear?: boolean;
    className?: string;
    placeholder?: string;
    name: string;
}
export declare const TextField: ({ password, ref, border, readOnly, transparent, styleContainer, icon, clear, className, placeholder, name }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
