import { useEffect, useState } from "react"
import { TextButton, X } from "../../.."
import { SnackbarProps } from "../../Provider/SnackbarProvider"
import "./Snackbar.scss"

export const Snackbar = ({visible, text, option}:SnackbarProps) => {

    const [shouldRender, setShouldRender] = useState(visible)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (visible) {
        setShouldRender(true)
        setTimeout(() => setIsVisible(true), 10) // добавляем класс с анимацией
        } else {
        setIsVisible(false)
        setTimeout(() => setShouldRender(false), 300) // время должно совпадать с CSS
        }
    }, [visible])

    const close = () => option?.onHide?.()

  if (!shouldRender) return null

    return(
        <div 
            role="alert"
            aria-live="assertive" 
            className={`snackbar-container ${isVisible? "show": "hide"} ${option?.className ?? ""}`} 
            style={{backgroundColor: option?.backgroundColor, color: option?.color}}
        >
            <div className="snackbar-content-container">
                <div className="snackbar-text">
                    {text}
                </div>
                {
                    (option?.onClick) &&
                    <div className="snackbar-button-container">
                        <TextButton className="snackbar-btn" onClick={option.onClick}>{option.buttonText ?? "Action"}</TextButton>
                    </div>
                }
            </div>
            {
                (option?.closeButton) &&
                <div className="snackbar-close">
                    <span onClick={close}><X/></span>
                </div>
            }
        </div>
    )
}