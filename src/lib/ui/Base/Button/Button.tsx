import "./button.scss"
import React from 'react'

type IBaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type styleType = "outline" | "text" | "filledTotal" | "filled" | "base"

export interface BaseButtonProps extends IBaseButtonProps {
    size?: "small" | "medium" | "large";
}

export interface IButtonProps extends BaseButtonProps {
    styleType?: styleType
}

export const OutlineButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " outline-button"})

export const TextButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " text-button"})

export const FilledTotalButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " total-button"})

export const FilledButton = (props: BaseButtonProps) => BaseButton({...props, className:(props.className ?? "") + " filled-button"})

export const BaseButton = ({size = 'medium', ...props}: BaseButtonProps) => {

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

    const sizeClasses = {
        small: "btn--small",
        medium: "btn--medium",
        large: "btn--large",
      };

    return(
    <button {...{...props, className:(props.className ?? "") + " btn " + sizeClasses[size], onClick: click}}>
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