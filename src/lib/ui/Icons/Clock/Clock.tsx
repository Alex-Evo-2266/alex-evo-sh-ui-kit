import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";


export const Clock = (props:IconProps) => (
    <SVG {...{...props}}>
        <circle stroke="var(--On-surface-color)" fill="none" cx="12" cy="12" r="10" stroke-width="1.5"/>
        <path stroke="var(--On-surface-color)" fill="none" d="M12 8V12L14.5 14.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </SVG>
)