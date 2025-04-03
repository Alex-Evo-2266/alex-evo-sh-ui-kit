
interface ColorPickerProps {
    onHide?: () => void;
    onChange?: (hexColor: string) => void;
    beginColor?: string;
    userColor?: string[];
    onAddColor?: (colors: string[]) => void;
    def?: string;
}
export declare const ColorPicker: React.FC<ColorPickerProps>;
export {};
