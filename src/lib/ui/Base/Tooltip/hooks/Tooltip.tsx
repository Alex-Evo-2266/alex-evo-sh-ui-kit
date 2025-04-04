import { useEffect, useRef, useState } from "react";

export enum PopupState {
    OPEN,
    HIDING,
    CLOSE
}

export const usePopup = ({valueDisplayDuration = 2000}:{valueDisplayDuration: number}) => {

    const [popupState, setPopupState] = useState<PopupState>(PopupState.CLOSE);
    const timeoutRef = useRef<number>();
    const hideTimeoutRef = useRef<number>();

    const hidePopup = () => {
        setPopupState(PopupState.HIDING);
        hideTimeoutRef.current = window.setTimeout(() => {
            setPopupState(PopupState.CLOSE);
        }, 500);
    }

    const showPopup = () => {
        setPopupState(PopupState.OPEN);
        
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);

        if(valueDisplayDuration)
            timeoutRef.current = window.setTimeout(() => {
                hidePopup()
            }, valueDisplayDuration);
    };

      // Очистка таймеров при размонтировании
    useEffect(() => {
        return () => {
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
            if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
        };
    }, []);

    return{
        showPopup,
        popupState,
        hidePopup
    }
}
