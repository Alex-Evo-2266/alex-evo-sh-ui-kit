import { default as React } from '../../../../../node_modules/react';

export interface IColumnElement {
    indexCol: number;
    node: React.ReactNode;
}
export interface ColumnLayoutProps {
    className?: string;
    classNameColumn?: string;
    style?: React.CSSProperties;
    items: IColumnElement[];
    countColumn: number;
    gap?: number;
    onClickColl?: (index: number, e: React.MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const ColumnLayout: React.FC<ColumnLayoutProps>;
