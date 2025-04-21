import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";

export const Plug = (props:IconProps) => {
    const color = getColor(props)

    return(
        <SVG {...{...props}}>
           <path fill="none" d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19" stroke={color.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </SVG>
    )
}