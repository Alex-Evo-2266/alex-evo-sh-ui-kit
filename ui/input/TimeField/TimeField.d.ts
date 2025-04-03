
interface ITimeFieldProps {
    onChange?: (value: string) => void;
    name?: string;
    value?: string;
    validEmptyValue?: boolean;
    className?: string;
    error?: boolean;
    border?: boolean;
    container: HTMLElement | null;
}
export declare const TimeField: ({ border, onChange, name, value, className, validEmptyValue, error, container }: ITimeFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
