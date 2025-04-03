
export interface CheckboxProps {
    name?: string;
    checked?: boolean;
    readOnly?: boolean;
    checkIcon?: React.ReactNode;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: ({ name, checked, onChange, readOnly, checkIcon }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
