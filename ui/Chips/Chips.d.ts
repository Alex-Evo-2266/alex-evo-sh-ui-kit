
export interface ChipsProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onDelete?: () => void;
    big?: boolean;
}
export declare const Chips: ({ text, onDelete, big, onClick }: ChipsProps) => import("react/jsx-runtime").JSX.Element;
