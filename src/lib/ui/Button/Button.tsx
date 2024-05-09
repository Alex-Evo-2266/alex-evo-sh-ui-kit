import "./button.scss"
import React from 'react'

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export interface IButtonProps extends BaseButtonProps {
    styleType?: "outline" | "text" | "filledTotal" | "filled" | "base"
}

export const OutlineButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " outline-button"})

export const TextButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " text-button"})

export const FilledTotalButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " total-button"})

export const FilledButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " filled-button"})

export const BaseButton = (props: BaseButtonProps) => {

    const click = (e:React.MouseEvent<HTMLButtonElement>) => {
        props.onClick && props.onClick(e)
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
    <button {...{...props, className:(props.className ?? "") + " btn", onClick: click}}>
        <span>{props.children}</span>
    </button>
    )
}

export const Button = ({styleType = "base", ...props}:IButtonProps) => {
    if(styleType === "outline")
        return OutlineButton({...props})
    if(styleType === "text")
        return TextButton({...props})
    if(styleType === "filledTotal")
        return FilledTotalButton({...props})
    if(styleType === "filled")
        return FilledButton({...props})
    return BaseButton({...props})
}