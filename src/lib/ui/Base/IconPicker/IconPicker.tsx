import React, { useState } from "react";
import { TextField } from "../../input/TextField/TextField";
import { SelectionDialog } from "../../Dialog/BaseDialog/SelectionDialog";

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
    ToolsIcon, Dashboard
} from "../../../../lib/ui/Icons"
import { ModalPortal } from "../../../portal/dialog";
import { IconProps } from "../../Icons/Base/iconProps";

export interface IconOption {
  id: string;
  name: string;
  component: React.ReactNode;
}

export interface IconSelectFieldProps {
  icons: IconOption[];
  value?: string;
  onChange?: (id: string) => void;
  disabled?: boolean
  placeholder?: string
  container?: HTMLElement | null
}

export const IconSelectField: React.FC<IconSelectFieldProps> = ({ icons, value, onChange, disabled, placeholder, container = document.getElementById("root") }) => {
  const [open, setOpen] = useState(false);
  const selectedIcon = icons.find((i) => i.id === value);

  const handleSelect = (id: string) => {
    onChange?.(id);
    setOpen(false);
  };

  return (
    <>
      <TextField 
        border 
        icon={selectedIcon?.component ?? undefined} 
        value={selectedIcon?.name} 
        readOnly 
        disabled={disabled}
        onClick={() => setOpen(true)}
        placeholder={placeholder}
      />
        {open && (
          <ModalPortal container={container}>
            <SelectionDialog 
              header="Icons" 
              onHide={()=>setOpen(false)} 
              onSuccess={handleSelect} 
              items={icons.map(i=>({icon: i.component, title: i.name, data: i.id}))}
            />
          </ModalPortal>
          
      )}
    </>
  );
};



const iconComponents = {
    Dashboard,
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
    ToolsIcon
}
    
const icons = Object.entries(iconComponents).map(([id, Icon]) => ({
  id,
  name: id.charAt(0).toUpperCase() + id.slice(1),
  component: <Icon />
}));

export interface IconsSelectProps extends Omit<IconSelectFieldProps, "icons"> {}

export const IconsSelect:React.FC<IconsSelectProps> = (props) => {

  return(
    <IconSelectField icons={icons} {...{...props}}/>
  )
}

export type IconName = keyof typeof iconComponents;

export function getIcons(id: IconName){
  return iconComponents[id] ?? undefined
}