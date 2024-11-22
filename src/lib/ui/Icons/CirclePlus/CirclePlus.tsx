import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";

export const CirclePlus = (props:IconProps) => (
    <SVG {...{...props}}>
		<path stroke="var(--On-surface-color)" fill="none" d="M8 12H16M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</SVG>
  );