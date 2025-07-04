import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";

export const Plus = (props:IconProps) => {
    const color = getColor(props)

    return(
        <SVG {...{...props}}>
           <path fill="none" d="M6 12H18M12 6V18" stroke={color.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </SVG>
    )
}