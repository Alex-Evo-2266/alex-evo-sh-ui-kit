import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";


export const MenuIcon = (props:IconProps) => (
    <SVG {...{...props, dpi: '52'}}>
        <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/><path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/><path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
    </SVG>
)