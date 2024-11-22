import { TextButton, X } from "../../.."
import "./Snackbar.scss"

export interface IOptionSnackbar{
    onClick?: ()=>void
    buttonText?: string
    closeButton?: boolean
    backgroundColor?: string,
    color?: string
    className?: string
    onHide?: ()=>void
}

export interface SnackbarProps{
    visible: boolean
    option?:IOptionSnackbar
    text: string
}

export const Snackbar = ({visible, text, option}:SnackbarProps) => {

    const close = ()=>{
        option?.onHide && option.onHide()
    }

    if(!visible)
        return null

    return(
        <div className={`snackbar-container ${option?.className}`} style={{backgroundColor: option?.backgroundColor, color: option?.color}}>
            <div className="snackbar-content-container">
                <div className="snackbar-text">
                    {text}
                </div>
                {
                    (option?.onClick)?
                    <div className="snackbar-button-container">
                        <TextButton className="snackbar-btn" onClick={option.onClick}>{option.buttonText ?? "Action"}</TextButton>
                    </div>:
                    null
                }
            </div>
            {
                (option?.closeButton)?
                <div className="snackbar-close">
                    <span onClick={close}><X/></span>
                </div>:
                null
            }
        </div>
    )
}