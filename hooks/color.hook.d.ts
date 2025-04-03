import { BaseColor, ChangeColor, ColorState, NightColor } from '../model/color';

export declare const useColor: () => {
    colors: ColorState;
    setColor: (newColors: ChangeColor) => Promise<void>;
    nightMode: boolean;
    setNightMode: (mode: boolean) => void;
    reCalculateColor: (mode?: boolean) => void;
    lightColor: BaseColor;
    nightColor: NightColor;
};
