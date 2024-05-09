
export interface DialogProps {
    children: React.ReactNode;
    header?: string;
    onSave?: (data?: any) => void;
    onHide?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const FullScrinTemplateDialog: ({ style, className, header, children, onSave, onHide }: DialogProps) => import("react/jsx-runtime").JSX.Element;
