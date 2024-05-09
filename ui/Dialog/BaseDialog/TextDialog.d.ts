/// <reference types="react" />
export interface TextDialogProps {
    text?: string;
    header?: string;
    onSuccess?: (data: string) => void;
    onHide?: () => void;
    placeholder?: string;
    type?: string;
    min?: number;
    max?: number;
    styleContainer?: React.CSSProperties;
}
export declare const TextDialog: ({ styleContainer, text, header, onSuccess, onHide, placeholder, type, min, max }: TextDialogProps) => import("react/jsx-runtime").JSX.Element;
