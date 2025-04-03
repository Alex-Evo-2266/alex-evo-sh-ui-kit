/// <reference types="react" />
export interface ModalTemplateProps {
    children: React.ReactNode;
    onHide?: () => void;
    disableBackplate?: boolean;
}
export declare const ModalTemplate: React.FC<ModalTemplateProps>;
