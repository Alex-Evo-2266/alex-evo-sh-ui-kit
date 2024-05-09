
export interface DialogProps {
    children: React.ReactNode;
    header?: string;
    action?: React.ReactNode;
    onHide?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const BasicTemplateDialog: ({ className, children, header, action, onHide, style }: DialogProps) => import("react/jsx-runtime").JSX.Element;
