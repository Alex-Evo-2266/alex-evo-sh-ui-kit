
export interface ISwitchProps {
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    className?: string;
}
export declare const Switch: ({ name, onChange, checked, className }: ISwitchProps) => import("react/jsx-runtime").JSX.Element;
