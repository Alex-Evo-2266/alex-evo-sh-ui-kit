
export interface ITextFieldProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    name?: string;
    value?: number | string;
    placeholder?: string;
    validEmptyValue?: boolean;
    className?: string;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    icon?: React.ReactNode;
    onClear?: () => void;
    border?: boolean;
    password?: boolean;
    readOnly?: boolean;
    type?: string;
    transparent?: boolean;
    min?: number;
    max?: number;
    styleContainer?: React.CSSProperties;
    ref?: React.LegacyRef<HTMLInputElement> | undefined;
}
export declare const TextField: ({ onClick, ref, styleContainer, type, transparent, readOnly, password, border, onClear, icon, onChange, name, value, placeholder, className, validEmptyValue, onFocus, onBlur, error, max, min }: ITextFieldProps) => import("react/jsx-runtime").JSX.Element;
