import { useCallback, useEffect, useState } from "react"
import "./BottomSheets.scss"
import { ModalTemplate } from "../../Dialog/TemplateDialog/ModalTemplate"

export interface BottomSheetsUiProps{
    onHide: ()=>void
    visible: boolean
    children?: React.ReactNode
}

export const BottomSheetsUi = (props:BottomSheetsUiProps) => {

    const [hided, setHided] = useState<boolean>(false)
    const [isСlosed, setIsСlosed] = useState<boolean>(true)

    const hide = useCallback(() => {
        setHided(true)
        setTimeout(()=>{
            props.onHide()
            setHided(false)
            setIsСlosed(true)
        },200)
    },[props.onHide])

    useEffect(()=>{
        if(props.visible)
            setIsСlosed(false)
    },[props.visible])

    useEffect(()=>{
        if(!props.visible && !isСlosed)
            hide()
    },[props.visible, hide, isСlosed])

    if(isСlosed && !hided || !props.children)
        return null

    return(
        <ModalTemplate onHide={hide}>
            <div className={`bottom-sheets ${hided?"hide":""}`}>
                <div className="bottom-sheets-handle"><span></span></div>
                <div className="bottom-sheets-content">
                    {props.children}
                </div>
            </div>
        </ModalTemplate>
    )
}