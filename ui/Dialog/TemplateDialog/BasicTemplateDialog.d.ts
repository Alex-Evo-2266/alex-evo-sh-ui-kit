
export interface DialogProps {
    children: React.ReactNode;
    header?: string;
    action?: React.ReactNode;
    onHide?: () => void;
    className?: string;
    style?: React.CSSProperties;
    clearStyle?: boolean;
    disableBackplate?: boolean;
    marginBottom?: number;
}
export declare const ModalTemplateDialog: ({ className, children, header, action, onHide, style, clearStyle, disableBackplate }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export declare const BasicTemplateDialog: ({ marginBottom, ...props }: DialogProps) => import("react/jsx-runtime").JSX.Element;
