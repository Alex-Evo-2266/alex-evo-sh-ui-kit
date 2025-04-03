
interface IColorFieldProps {
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string;
    className?: string;
    border?: boolean;
    container: HTMLElement | null;
    transparent?: boolean;
    userColor?: string[];
    onAddColor?: (colors: string[]) => void;
    def?: string;
}
export declare const ColorField: ({ border, onChange, container, value, className, transparent, userColor, onAddColor, def, placeholder }: IColorFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
