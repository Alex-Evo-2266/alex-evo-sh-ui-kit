
export interface DialogProps {
    children: React.ReactNode;
    header?: string;
    onSave?: (data?: any) => void;
    onHide?: () => void;
    className?: string;
    style?: React.CSSProperties;
    marginBottom?: number;
    disableBackplate?: boolean;
}
export declare const FullScrinTemplateDialog: ({ style, className, header, children, onSave, onHide, marginBottom, disableBackplate }: DialogProps) => import("react/jsx-runtime").JSX.Element;
