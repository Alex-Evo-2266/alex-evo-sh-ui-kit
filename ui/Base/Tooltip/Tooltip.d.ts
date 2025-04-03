
export interface TooltipProps {
    className?: string;
    state?: PopupState;
    text: string;
}
export declare enum PopupState {
    OPEN = 0,
    HIDING = 1,
    CLOSE = 2
}
export declare const usePopup: ({ valueDisplayDuration }: {
    valueDisplayDuration: number;
}) => {
    showPopup: () => void;
    popupState: PopupState;
    hidePopup: () => void;
};
export declare const Tooltip: React.FC<TooltipProps>;
