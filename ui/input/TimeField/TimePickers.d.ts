
export interface ITimePickerProps {
    onHide: () => void;
    onChange: (hours: number, minutes: number) => void;
    hours: number;
    minutes: number;
}
export declare const TimePicker: (props: ITimePickerProps) => import("react/jsx-runtime").JSX.Element;
