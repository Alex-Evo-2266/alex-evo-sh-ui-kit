import { useCallback, useEffect, useRef, useState } from "react"
import "./BottomSheets.scss"
import { ModalTemplate } from "../../Dialog/TemplateDialog/ModalTemplate"

export interface BottomSheetsUiProps{
    onHide: ()=>void
    visible: boolean
    children?: React.ReactNode
    bottom?: number
}

export const BottomSheetsUi = ({bottom = 0, ...props}:BottomSheetsUiProps) => {

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
        if(window.innerHeight - e.changedTouches[0].clientY <= 150)
            hide()
        if(bottomSheets.current)
            bottomSheets.current.style.height = `${window.innerHeight - e.changedTouches[0].clientY + 20 - bottom}px`
    },[hide])

    const mouseMove = (e:MouseEvent) => {
        if(window.innerHeight - e.clientY + 20 <= 150)
            hide()
        if(bottomSheets.current)
            bottomSheets.current.style.height = `${window.innerHeight - e.clientY + 20 - bottom}px`
    }

    const mouseUp = () => {
        document.body.removeEventListener('mousemove', mouseMove)
        document.body.removeEventListener('mouseup', mouseUp)
    }

    const mouseDown = () => {
        document.body.addEventListener('mousemove', mouseMove)
        document.body.addEventListener('mouseup', mouseUp)
    }

    useEffect(()=>{
      return ()=>{
        document.body.removeEventListener('mousemove', mouseMove)
        document.body.removeEventListener('mouseup', mouseUp)
      } 
    })

    if(isСlosed && !hided || !props.children)
        return null

    return(
        <ModalTemplate onHide={hide}>
            <div ref={bottomSheets} style={{paddingBottom: bottom}} className={`bottom-sheets ${hided?"hide":""}`}>
                <div className="bottom-sheets-handle" onMouseDown={mouseDown} onTouchMove={touchMove}><span></span></div>
                <div className="bottom-sheets-content">
                    {props.children}
                </div>
            </div>
        </ModalTemplate>
    )
}