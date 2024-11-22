import { IconProps } from "../Base/iconProps";
import { getColor, SVG } from "../Base/Svg";

export const Check = (props:IconProps) => {

  const color = getColor(props)

  return(
    <SVG {...{...props}}>
      <path fill="none" d="M4 12.6111L8.92308 17.5L20 6.5" stroke={color.primaryColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SVG>
  );
} 