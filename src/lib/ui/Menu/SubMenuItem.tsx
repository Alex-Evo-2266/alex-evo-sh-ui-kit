import { IMenuSubItem } from "../../model/menu"
import { Check } from "../Icons"

interface MenuItemProps{
    item: IMenuSubItem
    isIcon: boolean
    globalClick?: ()=>void
    autoHide?: boolean
    onHide?: ()=>void
}

const SubMenuItem = ({item, isIcon, globalClick, autoHide, onHide}:MenuItemProps) => {

    const click = () => {
        item.onClick && item.onClick()
        globalClick && globalClick()
        autoHide && onHide?.()
    }

    return(
        <div className={`menu-sub-item ${item.disabled?"disabled":""}`} onClick={click}>
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