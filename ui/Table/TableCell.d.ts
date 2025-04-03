import { Column, IDataItem } from '../../model/table';

interface CellProps {
    column: Column;
    data: IDataItem;
    color?: string;
    backgroundColor?: string;
    H?: number;
}
export declare const TableCell: ({ data, column, color, backgroundColor, H }: CellProps) => import("react/jsx-runtime").JSX.Element;
export {};
