
export interface ISwitchProps {
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    className?: string;
    style?: React.CSSProperties;
    ref?: React.RefObject<HTMLInputElement>;
    readOnly?: boolean;
}
export declare const Switch: ({ ref, style, name, onChange, checked, className, readOnly }: ISwitchProps) => import("react/jsx-runtime").JSX.Element;
