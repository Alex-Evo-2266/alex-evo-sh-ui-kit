import { NavigationBtn, NavigationButton } from '../../model/navigation';

export interface NavigationRailProps {
    firstBtn?: NavigationBtn;
    mainBtn?: NavigationButton[];
    backBtn?: NavigationBtn;
    onToggleMenu?: () => void;
}
export declare const NavigationRail: ({ onToggleMenu, firstBtn, mainBtn, backBtn }: NavigationRailProps) => import("react/jsx-runtime").JSX.Element;
