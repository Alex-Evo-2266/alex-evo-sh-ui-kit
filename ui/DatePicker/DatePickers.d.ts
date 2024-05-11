import { default as React } from '../../../../node_modules/react';

export interface IСalendarPickersProps {
    onChange?: (year: number, month: number, day: number) => void;
    onHide?: () => void;
}
export declare const СalendarPickers: React.FC<IСalendarPickersProps>;
