
export interface RadioButtonProps {
    name: string;
    currentValue?: string | number;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    checked?: boolean;
}
export interface BaseRadioButtonProps {
    name: string;
    checked?: boolean;
}
export declare const BaseRadioButton: ({ name, checked }: BaseRadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const RadioButton: ({ name, currentValue, value, onChange, readOnly, checked }: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
