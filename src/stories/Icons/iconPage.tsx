import {
    GearIcon, X, Trash, Pen, 
    Palette, Home, MoreHorizontal, 
    MenuIcon, MoreVertical, CircleMinus, 
    Calendar, Check, ChevronDown, CirclePlus,
    Clock, ArrowLeft, Keyboard, Search, LogoutIcon,
    Plus, Minus, Plug, UnLinkIcon, LinkIcon, UserIcon, AddUserIcon,
    MinusUserIcon, XUserIcon, OkUserIcon, Group, Room, Copy,
    ArrowRight, TempHighIcon, Sensor, Curtains,FilterIcon, Play,
    ArrowUp, LampIcon, SwitchIcon, ConditionerIcon, ConditionerIcon2, Sensor2, Sensor3, SensorWarning
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
    ArrowRight,
    ArrowUp,
    Keyboard, 
    Search, 
    Plus, 
    Minus, 
    Plug,
    LampIcon,
    SwitchIcon,
    ConditionerIcon,
    ConditionerIcon2,
    TempHighIcon,
    Sensor, Sensor2, Sensor3,
    SensorWarning,
    Curtains,
    FilterIcon,
    Play
]

export const IconDemoPage:React.FC = () => {

    return(
        <div>
            {
                icons.map((Item, index)=>(<Item size="50px" key={index}/>))
            }
            <LampIcon size="50px" secondaryColor="yellow"/>
        </div>
    )
}
