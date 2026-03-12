import React, { useContext, useState } from "react"
import { IBlock } from "../../../model/menu"
import { Menu } from "../../Menu/Menu"
import { IconButton, IconButtonProps } from "../IconButton/IconButton"
import { ScreenSize } from "../../../model/sizeScreen"
import { IPoint } from "../../../model/point"
import { SizeContext } from "../../Provider/SizeProvider"

export interface  IconButtonMenuProps extends IconButtonProps {
    container?:HTMLElement | null
    blocks: IBlock[]
    screensize?: ScreenSize
    autoHide?: boolean
}

export const IconButtonMenu = React.forwardRef<HTMLButtonElement, IconButtonMenuProps>(({screensize, autoHide, blocks, container, onClick, ...props}, ref) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [poz, setPoz] = useState<IPoint|undefined>(undefined)
    const {screen} = useContext(SizeContext)

    const hide = () => {
        setVisible(false)
        setPoz(undefined)
    }

    const show = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        setVisible(true)
        setPoz({x: event.clientX, y: event.clientY})
        onClick?.(event)
    }

    const screenData = screensize ?? screen

    return(
        <>
            <IconButton 
            ref={ref}
            onClick={show}
            {...{...props}}
            />
            <Menu 
            marginBottom={screenData === ScreenSize.MOBILE?80:0} 
            onHide={hide} 
            autoHide={autoHide} 
            screensize={screensize} 
            visible={visible} 
            x={poz?.x ?? 0} 
            y={poz?.y ?? 0} 
            blocks={blocks} 
            container={container}
            />
        </>
    )
})