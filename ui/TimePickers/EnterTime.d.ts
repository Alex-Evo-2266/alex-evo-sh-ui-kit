
interface SelectTimeProps {
    setMinutes: (number: number) => void;
    setHours: (number: number) => void;
    switchMode: () => void;
    minutes: number;
    hours: number;
    onCancel: () => void;
    onOK: () => void;
}
export declare const EnterTime: ({ setHours, setMinutes, switchMode, minutes, hours, onCancel, onOK }: SelectTimeProps) => import("react/jsx-runtime").JSX.Element;
export {};
