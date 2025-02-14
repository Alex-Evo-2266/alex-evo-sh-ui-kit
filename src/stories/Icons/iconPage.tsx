import {
    GearIcon, X, Trash, Pen, 
    Palette, Home, MoreHorizontal, 
    MenuIcon, MoreVertical, CircleMinus, 
    Calendar, Check, ChevronDown, CirclePlus,
    Clock, ArrowLeft, Keyboard, Search, LogoutIcon,
    Plus, Minus, Plug, UnLinkIcon, LinkIcon, UserIcon, AddUserIcon,
    MinusUserIcon, XUserIcon, OkUserIcon, Group, Room, Copy
} from "../../lib/ui/Icons"

const icons = [
    Copy,
    LogoutIcon,
    Room,
    Group,
    OkUserIcon,
    XUserIcon,
    MinusUserIcon,
    AddUserIcon,
    UserIcon,
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
