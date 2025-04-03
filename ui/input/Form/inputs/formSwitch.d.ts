/// <reference types="react" />
export interface SwitchFieldProps {
    password?: boolean;
    placeholder?: string;
    ref?: React.RefObject<HTMLInputElement>;
    readOnly?: boolean;
    className?: string;
    style?: React.CSSProperties;
    name: string;
}
export declare const SwitchField: ({ placeholder, ref, style, readOnly, className, name }: SwitchFieldProps) => import("react/jsx-runtime").JSX.Element;
