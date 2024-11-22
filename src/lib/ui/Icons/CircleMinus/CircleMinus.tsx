import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";

export const CircleMinus = (props:IconProps) => (
    <SVG {...{...props}}>
        <path fill="none" d="M16 12L12 12L8 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <circle fill="none" cx="12" cy="12" r="10" stroke="#000000" stroke-width="2"/>
    </SVG>
)