import { default as React } from '../../../../../node_modules/react';

export interface ColorSliderProps {
    colorRange?: string;
    colorBg?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    ariaLabel?: string;
    orientation?: 'horizontal' | 'vertical';
    showValue?: boolean;
    valueDisplayDuration?: number;
    strokeWidth?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    styleTrack?: 'base' | 'static-color' | 'point';
    startColor?: string;
}
export declare enum PopupState {
    OPEN = 0,
    HIDING = 1,
    CLOSE = 2
}
export declare const Range: React.FC<ColorSliderProps>;
