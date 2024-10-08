import { useCallback, useEffect, useRef, useState } from "react"
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
    const bottomSheets = useRef<HTMLDivElement>(null)

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

    const touchMove = useCallback((e:React.TouchEvent<HTMLDivElement>) => {
        if(window.screen.height - e.changedTouches[0].clientY <= 150)
            hide()
        if(bottomSheets.current)
            bottomSheets.current.style.height = `${window.screen.height - e.changedTouches[0].clientY}px`
    },[hide])

    const mouseMove = (e:MouseEvent) => {
        if(window.screen.height - e.clientY - 120 <= 150)
            hide()
        if(bottomSheets.current)
            bottomSheets.current.style.height = `${window.screen.height - e.clientY - 120}px`
    }

    const mouseUp = () => {
        document.body.removeEventListener('mousemove', mouseMove)
        document.body.removeEventListener('mouseup', mouseUp)
    }

    const mouseDown = () => {
        document.body.addEventListener('mousemove', mouseMove)
        document.body.addEventListener('mouseup', mouseUp)
    }


    if(isСlosed && !hided || !props.children)
        return null

    return(
        <ModalTemplate onHide={hide}>
            <div ref={bottomSheets} className={`bottom-sheets ${hided?"hide":""}`}>
                <div className="bottom-sheets-handle" onMouseDown={mouseDown} onTouchMove={touchMove}><span></span></div>
                <div className="bottom-sheets-content">
                    {props.children}
                </div>
            </div>
        </ModalTemplate>
    )
}