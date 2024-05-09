import { IBlock } from '../../model/menu';

interface MenuItemProps {
    block: IBlock;
    smallDisplay: boolean;
    onHide?: () => void;
    globalClick?: () => void;
    autoHide?: boolean;
}
declare function MenuBlock({ block, smallDisplay, onHide, globalClick, autoHide }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export { MenuBlock };
