import {
    GearIcon, X, Trash, Pen, 
    Palette, Home, MoreHorizontal, 
    MenuIcon, MoreVertical, CircleMinus, 
    Calendar, Check, ChevronDown, CirclePlus,
    Clock, ArrowLeft, Keyboard, Search, 
    Plus, Minus, Plug, UnLinkIcon, LinkIcon, ProfileIcon
} from "../../lib/ui/Icons"

const icons = [
    ProfileIcon,
    LinkIcon,
    UnLinkIcon,
    GearIcon, 
    X, 
    Trash, 
    Pen, 
    Palette, 
    Home, 
    MoreHorizontal,
    MenuIcon, 
    MoreVertical, 
    CircleMinus, 
    Calendar, 
    Check, 
    ChevronDown, 
    CirclePlus, 
    Clock, 
    ArrowLeft, 
    Keyboard, 
    Search, 
    Plus, 
    Minus, 
    Plug
]

export const IconDemoPage:React.FC = () => {

    return(
        <div>
            {
                icons.map((Item, index)=>(<Item size="50px" key={index}/>))
            }
        </div>
    )
}
