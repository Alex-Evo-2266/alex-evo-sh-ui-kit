import { IBlock } from "../../model/menu"
import { MenuItem } from "./MenuItem"

interface MenuItemProps{
    block: IBlock
    smallDisplay: boolean
    onHide?: ()=>void
    globalClick?: ()=>void
    autoHide?: boolean
}

function MenuBlock({block, smallDisplay, onHide, globalClick, autoHide}:MenuItemProps) {

    function isIcon(block: IBlock){
        for(let item of block.items){
            if(item.icon)
                return true
        }
        return false
    }

    return(
        <div className="menu-block">
        {
            block.items.map((item, index)=>(
            <MenuItem globalClick={globalClick} autoHide={autoHide} onHide={onHide} key={index} item={item} isIcon={isIcon(block)} smallDisplay={smallDisplay}/> 
            ))
        }
        </div>
    )
}

export {MenuBlock}