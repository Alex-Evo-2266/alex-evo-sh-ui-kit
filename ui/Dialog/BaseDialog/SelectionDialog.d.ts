interface IItem<T> {
    title: string;
    data: T;
}
interface SelectionDialogProps<T> {
    onSuccess?: (data: T) => void;
    items: IItem<T>[];
    header: string;
    onHide?: () => void;
    name?: string;
    noHide?: boolean;
}
export declare function SelectionDialog<T>({ onSuccess, items, header, onHide, noHide, name }: SelectionDialogProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
