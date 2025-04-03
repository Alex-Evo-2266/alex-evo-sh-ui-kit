
export interface BottomSheetsUiProps {
    onHide: () => void;
    visible: boolean;
    children?: React.ReactNode;
    bottom?: number;
}
export declare const BottomSheetsUi: ({ bottom, ...props }: BottomSheetsUiProps) => import("react/jsx-runtime").JSX.Element | null;
