
export interface FormProps<T extends {
    [x: string]: any;
}> {
    children: React.ReactNode;
    changeValue: (name: string, data: any) => void;
    value: T;
    name?: string;
    errors?: {
        [key: string]: string;
    };
}
export declare const Form: (<T extends {
    [x: string]: any;
}>({ children, value, name, changeValue, errors }: FormProps<T>) => import("react/jsx-runtime").JSX.Element) & {
    TextInput: ({ password, ref, border, readOnly, transparent, styleContainer, icon, clear, className, placeholder, name }: import('./inputs/formTextInput').TextFieldProps) => import("react/jsx-runtime").JSX.Element;
    NumberInput: ({ ref, border, readOnly, transparent, styleContainer, icon, clear, className, placeholder, name, min, max }: import('./inputs/formNumberInput').TextFieldProps) => import("react/jsx-runtime").JSX.Element;
    SelectInput: ({ items, ref, border, error, className, placeholder, name, container_id }: import('./inputs/formSelectInput').ISelectFieldProps) => import("react/jsx-runtime").JSX.Element;
    SwitchField: ({ placeholder, ref, style, readOnly, className, name }: import('./inputs/formSwitch').SwitchFieldProps) => import("react/jsx-runtime").JSX.Element;
    SwitchButtonField: ({ placeholder, ref, style, readOnly, className, name }: import('./inputs/formSwitchButton').SwitchFieldProps) => import("react/jsx-runtime").JSX.Element;
};
