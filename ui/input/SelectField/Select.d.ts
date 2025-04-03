import { ScreenSize } from '../../../model/sizeScreen';

export interface IOption {
    title: string;
    value: string;
}
interface ISelectFieldProps {
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    className?: string;
    items: (IOption | string)[];
    border?: boolean;
    name?: string;
    error?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    container: HTMLElement | null;
    screensize?: ScreenSize;
    style?: React.CSSProperties;
    ref?: React.RefObject<HTMLInputElement>;
}
export declare const SelectField: ({ ref, style, screensize, items, onChange, value, placeholder, className, border, name, error, onBlur, onFocus, container }: ISelectFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
