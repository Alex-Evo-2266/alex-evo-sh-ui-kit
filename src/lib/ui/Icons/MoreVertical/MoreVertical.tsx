import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";


export const MoreVertical = (props:IconProps) => {
    const color = getColor(props)
    
    return(
        <SVG {...{...props}}>
            <path fill={color.primaryColor} fillRule="evenodd" clipRule="evenodd" d="M12 6.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm0 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM13.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"/>
        </SVG>
    )
}