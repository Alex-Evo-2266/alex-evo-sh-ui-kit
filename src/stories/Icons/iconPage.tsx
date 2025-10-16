import { Switch, useThemes } from "../../lib"
import {
    GearIcon, X, Trash, Pen, 
    Palette, Home, MoreHorizontal, 
    MenuIcon, MoreVertical, CircleMinus, 
    Calendar, Check, ChevronDown, CirclePlus,
    Clock, ArrowLeft, Keyboard, Search, LogoutIcon,
    Plus, Minus, Plug, UnLinkIcon, LinkIcon, UserIcon, AddUserIcon,
    MinusUserIcon, XUserIcon, OkUserIcon, Group, Room, Copy,
    ArrowRight, TempHighIcon, Sensor, Curtains,FilterIcon, Play,
    ArrowUp, LampIcon, SwitchIcon, ConditionerIcon, ConditionerIcon2, Sensor2, Sensor3, SensorWarning,
    ToolsIcon, Dashboard, Addons
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
    Play,
    ToolsIcon,
    Dashboard,
    Addons
]

export const IconDemoPage:React.FC = () => {

    const {setActiveTheme, activeTheme, colors} = useThemes()

    return(
        <div style={{background: colors.Surface_container_color}}>
            <Switch checked={activeTheme === "dark"} showLabel labelOff="light" labelOn="dark" onChange={e=>{setActiveTheme(!e.target.checked?"light":"dark")}}/>
            
            {
                icons.map((Item, index)=>(<Item size="50px" key={index}/>))
            }
            <LampIcon size="50px" secondaryColor="yellow"/>
        </div>
    )
}
