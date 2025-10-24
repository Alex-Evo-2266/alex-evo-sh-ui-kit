import { IMenuItem } from "../../model/menu"
import { useCallback, useState } from "react"
import { SubMenuItemBlock } from "./SubMenuItemBlock"
import { Check } from "../Icons"
import './style/menu-item.scss'

interface MenuItemProps{
    item: IMenuItem
    isIcon: boolean
    smallDisplay: boolean
    globalClick?: ()=>void
    autoHide?: boolean
    onHide?: ()=>void
}

const MenuItem = ({onHide, autoHide, globalClick, item, isIcon, smallDisplay}:MenuItemProps) => {

    const [visible, setVisible] = useState<boolean>(false)

    const subMenuToggle = useCallback(() => {
        if(item.subItems)
            setVisible(prev=>!prev)
        else{
            item.onClick && item.onClick()
            globalClick && globalClick()
            if(autoHide)
                onHide && onHide()
        }
    },[item.onClick])

    return(
        <div className={`menu-item ${item.disabled?"menu-item_disabled":""}`}>
            <div className="menu-item__info" onClick={subMenuToggle}>
                {
                    (isIcon)?
                    <div className="menu-item__info__icon">
                        {item.icon}
                    </div>:
                    null
                }
                <div className="menu-item__info__text">
                    {item.title}
                </div>
                <div className="menu-item__info__status ">
                    {
                        (item.subItems)?
                        <span className={`menu-item__info__status__arrow ${visible?"menu-item__info__status__arrow_active":""}`}></span>:
                        (item.activated)?
                        <Check/>:
                        <span className="menu-item__info__status__none"/>
                    }
                </div>
            </div>
                {
                    (visible && item.subItems)?
                    <SubMenuItemBlock autoHide={autoHide} items={item.subItems} onGlobalHide={onHide} onHide={()=>setVisible(false)} smallDisplay={smallDisplay}/>:
                    null
                }
        </div>
    )
}

export {MenuItem}