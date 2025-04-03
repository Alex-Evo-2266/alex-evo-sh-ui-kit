import { ITable } from '../../model/table';
import { ScreenSize } from '../../model/sizeScreen';

interface ITableProps extends ITable {
    adaptive?: boolean;
    screenSize?: ScreenSize;
}
export declare const Table: ({ data, columns, onDelete, onContextMenu, onEdit, actions, onClickRow, adaptive }: ITableProps) => import("react/jsx-runtime").JSX.Element;
export {};
