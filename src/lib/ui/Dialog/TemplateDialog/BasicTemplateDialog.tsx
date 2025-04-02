import { useScrollLock } from "../../../hooks/lockScroll.hook"
import { useScreenSize } from "../../../hooks/screenSize.hook"
import { ScreenSize } from "../../../model/sizeScreen"
import { BottomSheetsUi } from "../../Base/BottomSheets/BottomSheetsUi"
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
    disableBackplate?: boolean
	marginBottom?: number
}

export const ModalTemplateDialog = ({className, children, header, action, onHide, style, clearStyle = false, disableBackplate}:DialogProps) => {

    function hide() {
        onHide && onHide()
    }

    return(
        <ModalTemplate onHide={hide} disableBackplate={disableBackplate}>
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

export const BasicTemplateDialog = ({marginBottom = 80, ...props}:DialogProps) => {

    const {screen} = useScreenSize()

    useScrollLock(true, document.body)

    const hide = ()=>{
        props.onHide?.()
    }
    
    if(screen !== ScreenSize.MOBILE)
        return(
            <ModalTemplateDialog {...{...props}}/>
        )

    return(
        <BottomSheetsUi bottom={marginBottom} onHide={hide} visible={true}>
            <div style={props.style} className={`dialog-container-bottom-sheet ${props.className}`}>
                {
                    (props.header)?
                    <div className="dialog-header"><h2 className="text-3xl">{props.header}</h2></div>
                    :null
                }
                <div className="dialog-content">
                {props.children}
                </div>
                {
                    (props.action)?
                    <div className="dialog-action">
                        {props.action}
                    </div>:null
                }
            </div>
        </BottomSheetsUi>
    )
}