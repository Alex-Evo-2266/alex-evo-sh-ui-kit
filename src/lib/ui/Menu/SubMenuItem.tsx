import { IMenuSubItem } from "../../model/menu"
import { Check } from "../Icons"

interface MenuItemProps{
    item: IMenuSubItem
    isIcon: boolean
    globalClick?: ()=>void
}

const SubMenuItem = ({item, isIcon, globalClick}:MenuItemProps) => {

    const click = () => {
        item.onClick && item.onClick()
        globalClick && globalClick()
    }

    return(
        <div className="menu-sub-item" onClick={click}>
            {
                (isIcon)?
                <div className="menu-icon-container">
                    {item.icon}
                </div>:
                null
            }
            <div className="menu-text-container">
                {item.title}
            </div>
            <div className="menu-status-container">
                {
                    (item.activated)?
                    <Check/>:
                    null
                }
            </div>
        </div>
    )
}

export {SubMenuItem}