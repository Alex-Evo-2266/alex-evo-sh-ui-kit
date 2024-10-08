import { useEffect, useMemo, useRef, useState } from 'react'
import './ContentBox.scss'
import { getContainerData } from '../../../helpers/getContainerPozAndSize'
import { Typography } from '../../Text/Text/Typography'

export interface ActionContentBox{
    icon: React.ReactNode,
    onClick:()=>void
}

export interface ContentBoxProps{
    children: React.ReactNode
    label: string
    className?: string
    style?: React.CSSProperties
    border?:boolean
    hiding?: boolean
    defaultVisible?: boolean
    action?: ActionContentBox
}

const PADDING_BOTTOM = 10
const SPEED_K = 0.002

export const ContentBox = ({children, label, className, style, border, hiding, defaultVisible = false, action}:ContentBoxProps) => {

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

    const togle = (e:React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as Element
        const root = element.closest('.action-btn')
        if(root || element.classList.contains('action-btn'))
            return
        if(hiding)
            setVisible(prev=>!prev)
    }

    useEffect(()=>{
        if(!hiding && !contentVisible)
            setVisible(true)
    },[hiding, contentVisible])

    // const maxHeight = useMemo(()=>getMaxHeight(container.current),[container.current])
    const transition = useMemo(()=>getTransition(container.current), [container.current])
console.log(transition)
    return(
        <div style={style} className={`content-box ${border?"border":""} ${contentVisible?"active":""} ${className ?? ""}`}>
            <div className='content-box-label' onClick={togle}>
                <Typography type='title'>{label}</Typography>
                <div className='content-box-action-container'>
                {
                    (action)? 
                    <div className='content-box-status-container action-btn' onClick={action.onClick}>
                        {action.icon}
                    </div>:
                    (hiding)?
                    <div className='content-box-status-container'>
                        <span className={`content-box-status ${contentVisible?"active":""}`}></span>
                    </div>:
                    null
                }
                </div>
            </div>
            <div 
            className='content-box-container-curtain' 
            style={{
                transition:transition + "s", 
                height:(contentVisible)?"auto":"0px"
            }}
            >
                <div className='content-box-container' ref={container}>
                    {children}
                </div>
            </div>
        </div>
    )
}