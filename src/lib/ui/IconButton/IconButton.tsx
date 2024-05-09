import React from "react"
import "./IconButton.scss"

export interface IconButtonProps{
    icon: React.ReactNode
    className?: string
    classNameContainer?: string
    onClick?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    onContextMenu?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    disabled?: boolean
    style?: React.CSSProperties
    transparent?: boolean
  }

export const IconButton = ({transparent, icon, className, onClick, onContextMenu, disabled, classNameContainer, style}: IconButtonProps) => {

    const click = (e:React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e)
        let overlay = document.createElement('span')
        overlay.classList.add("btn-overlay")
        let x = e.pageX - e.currentTarget.offsetLeft
        let y = e.pageY - e.currentTarget.offsetTop
        overlay.style.left = x + "px"
        overlay.style.top = y + "px"
        e.currentTarget.appendChild(overlay)

        setTimeout(()=>{
            overlay.remove()
        },500)
    }

    return(
        <button style={{backgroundColor:(transparent)?"transparent":undefined , ...style}} className={`iconbutton ${className}`} onClick={click} onContextMenu={onContextMenu} disabled={disabled}>
            <div className={`${classNameContainer} iconbutton-container`}>
                {icon}
            </div>
        </button>
    )
}
