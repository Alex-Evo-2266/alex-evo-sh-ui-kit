import { MenuStateProps } from '../../model/menu';
import { ScreenSize } from '../../model/sizeScreen';

interface IMenu extends MenuStateProps {
    container?: HTMLElement | null;
    screensize?: ScreenSize;
}
export declare const Menu: (props: IMenu) => import("react/jsx-runtime").JSX.Element;
export {};
