
export interface ITextAreaProps {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
    value?: number | string;
    placeholder?: string;
    validEmptyValue?: boolean;
    className?: string;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    icon?: React.ReactNode;
    border?: boolean;
    readOnly?: boolean;
    transparent?: boolean;
    styleContainer?: React.CSSProperties;
}
export declare const TextArea: ({ styleContainer, transparent, readOnly, border, icon, onChange, name, value, placeholder, className, validEmptyValue, onFocus, onBlur, error }: ITextAreaProps) => import("react/jsx-runtime").JSX.Element;
