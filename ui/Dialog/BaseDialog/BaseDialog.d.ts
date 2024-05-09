/// <reference types="react" />
export interface BaseDialogProps {
    text?: string;
    header?: string;
    actionText?: string;
    onSuccess?: () => void;
    onCancel?: () => void;
    onHide?: () => void;
    styleContainer?: React.CSSProperties;
}
export declare const BaseDialog: ({ styleContainer, text, header, actionText, onSuccess, onHide, onCancel }: BaseDialogProps) => import("react/jsx-runtime").JSX.Element;
