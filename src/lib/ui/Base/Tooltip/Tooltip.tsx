import { useEffect, useRef, useState } from "react";
import './Tooltip.scss'

export interface TooltipProps{
    className?: string,
    state?: PopupState
    text: string
}

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

export const Tooltip:React.FC<TooltipProps> = ({className = '', text, state = PopupState.OPEN}) => {

    if(state === PopupState.CLOSE)
        return null

    return(
        <div 
            className={`alex-evo-sh-ui-kit-tooltip value-popup ${className} ${state === PopupState.HIDING ? "hiding" : ""}`}
            aria-live="polite"
            aria-atomic="true"
        >
            {text}
        </div>
    )
}