import { useCallback, useEffect, useState } from "react"
import "./BottomSheets.scss"

export interface BottomSheetsUiProps{
    onHide: ()=>void
    visible: boolean
    children?: React.ReactNode
}

export const BottomSheetsUi = (props:BottomSheetsUiProps) => {

    const [hided, setHided] = useState<boolean>(false)

    const hide = useCallback(() => {
        setHided(true)
        setTimeout(()=>{
            props.onHide()
            setHided(false)
        },200)
    },[props.onHide])

    useEffect(()=>{
        if(!props.visible)
            hide()
    },[props.visible, hide])

    if(!props.visible && !hided || !props.children)
        return null

    return(
        <>
        <div className={`bottom-sheets ${hided?"hide":""}`}>
            <div className="bottom-sheets-handle"><span></span></div>
            <div className="bottom-sheets-content">
                {props.children}
            </div>
        </div>
        <div className="backplate bottom-sheets-backplate" style={{zIndex:1101}} onClick={hide}></div>
        </>
    )
}