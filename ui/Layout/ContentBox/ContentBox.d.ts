
export interface ActionContentBox {
    icon: React.ReactNode;
    onClick: () => void;
}
export interface ContentBoxProps {
    children: React.ReactNode;
    label: string;
    className?: string;
    style?: React.CSSProperties;
    border?: boolean;
    hiding?: boolean;
    defaultVisible?: boolean;
    action?: ActionContentBox;
}
export declare const ContentBox: ({ children, label, className, style, border, hiding, defaultVisible, action }: ContentBoxProps) => import("react/jsx-runtime").JSX.Element;
