import { useEffect, useMemo, useRef, useState } from 'react'
import { H4 } from '../../Text/Text/Heading'
import './ContentBox.scss'
import { getContainerData } from '../../../helpers/getContainerPozAndSize'

export interface ContentBoxProps{
    children: React.ReactNode
    label: string
    className?: string
    style?: React.CSSProperties
    border?:boolean
    hiding?: boolean
    defaultVisible?: boolean
}

const PADDING_BOTTOM = 10
const SPEED_K = 0.002

export const ContentBox = ({children, label, className, style, border, hiding, defaultVisible = false}:ContentBoxProps) => {

    const [contentVisible, setVisible] = useState<boolean>(hiding?defaultVisible:true)
    const container = useRef<HTMLDivElement>(null)

    const getMaxHeight = (container?: HTMLElement | null) => {
        if(!container)
            return
        const constinerSize = getContainerData(container)
        if(!constinerSize)
            return
        return constinerSize.height + PADDING_BOTTOM
    }

    const getTransition = (container?: HTMLElement | null) => {
        const height = getMaxHeight(container)
        if(!height)
            return 0.4
        if(height * SPEED_K > 1)
            return 1
        return height * SPEED_K
    }

    const togle = () => {
        if(hiding)
            setVisible(prev=>!prev)
    }

    useEffect(()=>{
        if(!hiding && !contentVisible)
            setVisible(true)
    },[hiding, contentVisible])

    const maxHeight = useMemo(()=>getMaxHeight(container.current),[container.current])
    const transition = useMemo(()=>getTransition(container.current), [container.current])
console.log(transition)
    return(
        <div style={style} className={`content-box ${border?"border":""} ${contentVisible?"active":""} ${className ?? ""}`}>
            <div className='content-box-label' onClick={togle}>
                <H4>{label}</H4>
                {
                    (hiding)?
                    <div className='content-box-status-container'>
                        <span className={`content-box-status ${contentVisible?"active":""}`}></span>
                    </div>:
                    null
                }
            </div>
            <div 
            className='content-box-container-curtain' 
            style={{
                transition:transition + "s", 
                height:(contentVisible)?(maxHeight)?maxHeight + "px":"auto":"0px"
            }}
            >
                <div className='content-box-container' ref={container}>
                    {children}
                </div>
            </div>
        </div>
    )
}