import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";

export const Minus = (props:IconProps) => {
    const color = getColor(props)

    return(
        <SVG {...{...props}}>
           <path d="M6 12L18 12" fill="none" stroke={color.primaryColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </SVG>
    )
}