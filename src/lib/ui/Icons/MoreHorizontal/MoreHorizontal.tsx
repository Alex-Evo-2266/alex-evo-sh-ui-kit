import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";


export const MoreHorizontal = (props:IconProps) => {
        const color = getColor(props)
    
        return(
        <SVG {...{...props}}>
            <path fill={color.primaryColor} fillRule="evenodd" clipRule="evenodd" d="M5 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm14 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM13.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z" />
        </SVG>
        )
}