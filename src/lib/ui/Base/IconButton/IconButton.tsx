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

function getCoords(elem: Element) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
}

function btn_click_effect(e:React.MouseEvent<HTMLButtonElement>){
    let overlay = document.createElement('span')
    overlay.classList.add("btn-overlay")
    const cord = getCoords(e.target as Element)
    let x = e.pageX - cord.left
    let y = e.pageY - cord.top
    overlay.style.left = x + "px"
    overlay.style.top = y + "px"
    e.currentTarget.appendChild(overlay)
    setTimeout(()=>{
        overlay.remove()
    },500)
}

export const IconButton = ({transparent, icon, className, onClick, onContextMenu, disabled, classNameContainer, style}: IconButtonProps) => {

    const click = (e:React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e)
        btn_click_effect(e)
    }

    return(
        <button style={{backgroundColor:(transparent)?"transparent":undefined , ...style}} className={`iconbutton ${className}`} onClick={click} onContextMenu={onContextMenu} disabled={disabled}>
            <div className={`${classNameContainer} iconbutton-container`}>
                {icon}
            </div>
        </button>
    )
}
