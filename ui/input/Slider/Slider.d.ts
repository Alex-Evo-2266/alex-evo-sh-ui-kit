
export interface InputProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    maxMinDisplay?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
export declare const Slider: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
