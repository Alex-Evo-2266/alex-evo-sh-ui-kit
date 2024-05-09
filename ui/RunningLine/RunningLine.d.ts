import { default as React } from '../../../../node_modules/react';

export interface RunningLineProps {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
}
export declare const RunningLine: ({ style, text, className, onClick, onContextMenu }: RunningLineProps) => import("react/jsx-runtime").JSX.Element;
