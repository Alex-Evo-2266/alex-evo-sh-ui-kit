
export interface IOptionSnackbar {
    onClick?: () => void;
    buttonText?: string;
    closeButton?: boolean;
    backgroundColor?: string;
    color?: string;
    className?: string;
    onHide?: () => void;
}
export interface SnackbarProps {
    visible: boolean;
    option?: IOptionSnackbar;
    text: string;
}
export declare const Snackbar: ({ visible, text, option }: SnackbarProps) => import("react/jsx-runtime").JSX.Element | null;
