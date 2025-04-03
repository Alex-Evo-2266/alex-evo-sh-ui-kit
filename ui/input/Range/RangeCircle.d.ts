import { default as React } from '../../../../../node_modules/react';

interface CircleInputProps {
    colorBg?: string;
    colorRange?: string;
    pointColor?: string;
    min?: number;
    max?: number;
    value?: number;
    ariaLabel?: string;
    showValue?: boolean;
    valueDisplayDuration?: number;
    onChange?: (value: number) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
    styleTrack?: 'base' | 'static-color' | 'point';
    styleRange?: 'circle' | 'semicircle' | 'brokenCircle';
    strokeWidth?: number;
    radius?: number;
    showBase?: boolean;
    showIndicator?: boolean;
    showPoint?: boolean;
    rounding?: boolean;
    style?: React.CSSProperties;
    className?: string;
    startColor?: string;
}
declare const CircleInput: React.FC<CircleInputProps>;
export default CircleInput;
