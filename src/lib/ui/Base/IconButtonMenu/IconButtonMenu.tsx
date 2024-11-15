import { useState } from "react"
import { IBlock } from "../../../model/menu"
import { Menu } from "../../Menu/Menu"
import { IconButton } from "../IconButton/IconButton"
import { ScreenSize } from "../../../model/sizeScreen"
import { IPoint } from "../../../model/point"

export interface IconButtonProps{
    icon: React.ReactNode
    className?: string
    classNameContainer?: string
    disabled?: boolean
    style?: React.CSSProperties
    transparent?: boolean
    container?:HTMLElement | null
    blocks: IBlock[]
    screensize?: ScreenSize
  }

export const IconButtonMenu:React.FC<IconButtonProps> = ({icon, className, classNameContainer, disabled, style, transparent, container, blocks, screensize}) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [poz, setPoz] = useState<IPoint|undefined>(undefined)

    const hide = () => {
        setVisible(false)
        setPoz(undefined)
    }

    const show = (event:React.MouseEvent<HTMLButtonElement>) => {
        setVisible(true)
        setPoz({x: event.clientX, y: event.clientY})
    }

    return(
        <>
            <IconButton onClick={show} icon={icon} className={className} classNameContainer={classNameContainer} disabled={disabled} style={style} transparent={transparent}/>
            <Menu onHide={hide} screensize={screensize} visible={visible} x={poz?.x ?? 0} y={poz?.y ?? 0} blocks={blocks} container={container}/>
        </>
    )
}