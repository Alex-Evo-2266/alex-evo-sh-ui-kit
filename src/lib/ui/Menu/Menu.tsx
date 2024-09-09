import { MenuStateProps } from "../../model/menu"
import { ScreenSize } from "../../model/sizeScreen"
import { DialogModal } from "../../portal/dialog"
import { BaseMenu } from "./BaseMenu"
import { SmallWindowMenu } from "./SmallWindowMenu"

interface IMenu extends MenuStateProps{
    container?:HTMLElement | null
    screensize?: ScreenSize
}

export const Menu = (props:IMenu) => {

    if(props.screensize === ScreenSize.MOBILE)
        return(
            <DialogModal container={props.container}>
                <SmallWindowMenu {...props}/>
            </DialogModal>
        )

    return(
        <DialogModal container={props.container}>
                <BaseMenu {...props}/>
        </DialogModal>
    )
}