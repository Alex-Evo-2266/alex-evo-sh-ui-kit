import { Column, IDataItem, ITableAction } from '../../model/table';

interface RowProps {
    item: IDataItem;
    columns: Column[];
    index: number;
    actions?: ITableAction[];
    onDelete?: (data: IDataItem, index: number) => void;
    onEdit?: (data: IDataItem, index: number) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLElement>, data: IDataItem, index: number) => void;
    onClickRow?: (data: IDataItem, index: number) => void;
    maxH?: number[] | undefined;
}
export declare const TableRow: ({ actions, item, columns, onContextMenu, onDelete, onEdit, onClickRow, index, maxH }: RowProps) => import("react/jsx-runtime").JSX.Element;
export {};
