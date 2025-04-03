import { styleType } from '../../Base/Button/Button';

interface EmptyPageBtnProps {
    text: string;
    onClick: () => void;
    className?: string;
    style?: React.CSSProperties;
    styleType?: styleType;
}
export interface EmptyPageProps {
    title: string;
    text?: string;
    hexColor?: string;
    hexBackground?: string;
    style?: React.CSSProperties;
    className?: string;
    btn?: EmptyPageBtnProps;
}
export declare const EmptyPage: React.FC<EmptyPageProps>;
export {};
