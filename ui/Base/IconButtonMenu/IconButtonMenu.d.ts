import { IBlock } from '../../../model/menu';
import { ScreenSize } from '../../../model/sizeScreen';

export interface IconButtonProps {
    icon: React.ReactNode;
    className?: string;
    classNameContainer?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    transparent?: boolean;
    container?: HTMLElement | null;
    blocks: IBlock[];
    screensize?: ScreenSize;
    autoHide?: boolean;
}
export declare const IconButtonMenu: React.FC<IconButtonProps>;
