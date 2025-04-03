import { ScreenSize } from '../../../model/sizeScreen';

export interface ChipsProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onDelete?: () => void;
    big?: boolean;
    screenSize?: ScreenSize;
}
export declare const Chips: ({ text, onDelete, big, onClick, screenSize }: ChipsProps) => import("react/jsx-runtime").JSX.Element;
