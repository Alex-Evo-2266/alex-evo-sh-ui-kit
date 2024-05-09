import { IMenuSubItem } from '../../model/menu';

interface MenuItemProps {
    items: IMenuSubItem[];
    onHide: () => void;
    smallDisplay: boolean;
    globalClick?: () => void;
}
declare const SubMenuItemBlock: ({ items, onHide, smallDisplay, globalClick }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export { SubMenuItemBlock };
