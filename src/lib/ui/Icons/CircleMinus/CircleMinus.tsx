import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";

export const CircleMinus = (props:IconProps) => {
    const color = getColor(props)

    return(
        <SVG {...{...props}}>
            <path fill="none" d="M16 12L12 12L8 12" stroke={color.primaryColor} strokeWidth="2" strokeLinecap="round"/>
            <circle fill="none" cx="12" cy="12" r="10" stroke={color.primaryColor} strokeWidth="2"/>
        </SVG>
    )
}