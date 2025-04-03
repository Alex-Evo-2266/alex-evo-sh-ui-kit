import { ScreenSize } from '../model/sizeScreen';

interface ScreenSizeHookOption {
    mobileSize: number;
    bigSize: number;
}
export declare const useScreenSize: (option?: ScreenSizeHookOption) => {
    screen: ScreenSize;
};
export {};
