
interface SelectTimeProps {
    setMinutes: (number: number) => void;
    setHours: (number: number) => void;
    switchMode: () => void;
    minutes: number;
    hours: number;
    onCancel: () => void;
    onOK: () => void;
}
export declare const SelectTime: ({ setHours, setMinutes, switchMode, hours, minutes, onCancel, onOK }: SelectTimeProps) => import("react/jsx-runtime").JSX.Element;
export {};
