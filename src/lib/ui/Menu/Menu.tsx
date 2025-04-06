import { MenuStateProps } from "../../model/menu"
import { ScreenSize } from "../../model/sizeScreen"
import { ModalPortal } from "../../portal/dialog"
import { BaseMenu } from "./BaseMenu"
import { SmallWindowMenu } from "./SmallWindowMenu"

interface IMenu extends MenuStateProps{
    container?:HTMLElement | null
    screensize?: ScreenSize
}

export const Menu = (props:IMenu) => {

    if(props.screensize === ScreenSize.MOBILE)
        return(
            <ModalPortal container={props.container}>
                <SmallWindowMenu {...props}/>
            </ModalPortal>
        )

    return(
        <ModalPortal container={props.container}>
            <BaseMenu {...props}/>
        </ModalPortal>
    )
}