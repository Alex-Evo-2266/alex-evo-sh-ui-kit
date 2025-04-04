import { PopupState } from './hooks/Tooltip'
import './Tooltip.scss'

interface TooltipProps{
    className?: string,
    state?: PopupState
    text: string
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