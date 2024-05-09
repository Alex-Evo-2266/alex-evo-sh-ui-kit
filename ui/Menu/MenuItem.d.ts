import { IMenuItem } from '../../model/menu';

interface MenuItemProps {
    item: IMenuItem;
    isIcon: boolean;
    smallDisplay: boolean;
    globalClick?: () => void;
    autoHide?: boolean;
    onHide?: () => void;
}
declare const MenuItem: ({ onHide, autoHide, globalClick, item, isIcon, smallDisplay }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export { MenuItem };
