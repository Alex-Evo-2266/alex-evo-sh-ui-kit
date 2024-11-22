import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";

export const ChevronDown = (props:IconProps) => {
    const color = getColor(props)

    return (
        <SVG {...{...props}}>
            <path fill="none" stroke={color.primaryColor} d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </SVG>
      );
}