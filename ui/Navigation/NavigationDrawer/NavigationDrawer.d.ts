import { NavigationBtn, NavigationButton } from '../../../model/navigation';

export interface NavigationDrawerProps {
    visible?: boolean;
    openAlways?: boolean;
    onHide: () => void;
    firstBtn?: NavigationBtn;
    mainBtn?: NavigationButton[];
    otherBtn?: NavigationButton[];
    backBtn?: NavigationBtn;
}
export declare const NavigationDrawer: ({ visible, firstBtn, mainBtn, onHide, otherBtn, backBtn, openAlways }: NavigationDrawerProps) => import("react/jsx-runtime").JSX.Element;
