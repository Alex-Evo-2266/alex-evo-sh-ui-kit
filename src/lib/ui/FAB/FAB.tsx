import React from "react"
import "./FAB.scss"

export interface ExtendedFABProps{
    icon?: React.ReactNode
    className?: string
    onClick?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    onContextMenu?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    children?: React.ReactNode
    style?: React.CSSProperties
}



export const FAB = ({style, icon, className, onClick, onContextMenu, children}: ExtendedFABProps) => (
    <button style={style} className={`${className} extendedFAB`} onClick={onClick} onContextMenu={onContextMenu}>
        {icon}
        {
            (children)?
            <span>{children}</span>:
            null
        }
    </button>
)
