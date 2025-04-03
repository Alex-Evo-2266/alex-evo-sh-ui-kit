import { IOption } from '../../SelectField/Select';
import { ScreenSize } from '../../../../model/sizeScreen';

export interface ISelectFieldProps {
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    className?: string;
    items: (IOption | string)[];
    border?: boolean;
    name: string;
    error?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    container_id: string;
    screensize?: ScreenSize;
    style?: React.CSSProperties;
    ref?: React.RefObject<HTMLInputElement>;
}
export declare const SelectField: ({ items, ref, border, error, className, placeholder, name, container_id }: ISelectFieldProps) => import("react/jsx-runtime").JSX.Element;
