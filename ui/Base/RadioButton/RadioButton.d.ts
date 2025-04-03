
export interface RadioButtonProps {
    name: string;
    currentValue?: string | number;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
}
export interface BaseRadioButtonProps {
    name: string;
    checked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
export declare const BaseRadioButton: ({ name, checked, onClick }: BaseRadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const RadioButton: ({ defaultChecked, name, currentValue, value, onChange, readOnly, checked }: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
