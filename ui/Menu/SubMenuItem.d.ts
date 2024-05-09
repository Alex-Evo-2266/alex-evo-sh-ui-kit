import { IMenuSubItem } from '../../model/menu';

interface MenuItemProps {
    item: IMenuSubItem;
    isIcon: boolean;
    globalClick?: () => void;
}
declare const SubMenuItem: ({ item, isIcon, globalClick }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export { SubMenuItem };
