import "./Dialog.scss"
import { ModalTemplate } from "./ModalTemplate"

export interface DialogProps{
    children: React.ReactNode
    header?: string
    action?: React.ReactNode
    onHide?: ()=>void
    className?: string
    style?: React.CSSProperties
    clearStyle?: boolean
}

export const BasicTemplateDialog = ({className, children, header, action, onHide, style, clearStyle = false}:DialogProps) => {

    function hide() {
        onHide && onHide()
    }

    return(
        <ModalTemplate onHide={hide}>
            <div style={style} className={`${clearStyle?"":"dialog-container"} dialog-container-base ${className}`}>
                {
                    (header)?
                    <div className="dialog-header"><h2 className="text-3xl">{header}</h2></div>
                    :null
                }
                <div className="dialog-content">
                {children}
                </div>
                {
                    (action)?
                    <div className="dialog-action">
                        {action}
                    </div>:null
                }
            </div>
        </ModalTemplate>
        )
}