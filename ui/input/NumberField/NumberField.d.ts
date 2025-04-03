
export interface ITextFieldProps {
    onChange?: (value: number, name?: string) => void;
    name?: string;
    value?: number;
    placeholder?: string;
    validEmptyValue?: boolean;
    className?: string;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    icon?: React.ReactNode;
    onClear?: () => void;
    border?: boolean;
    readOnly?: boolean;
    transparent?: boolean;
    min?: number;
    max?: number;
    styleContainer?: React.CSSProperties;
    ref?: React.RefObject<HTMLInputElement>;
}
export declare const NumberField: ({ ref, styleContainer, transparent, readOnly, border, onClear, icon, onChange, name, value, placeholder, className, validEmptyValue, onFocus, onBlur, error, max, min }: ITextFieldProps) => import("react/jsx-runtime").JSX.Element;
