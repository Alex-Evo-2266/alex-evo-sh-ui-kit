import { IconProps } from "../Base/iconProps";
import { SVG } from "../Base/Svg";
import { getColor } from "../Base/Svg";

export const UnLinkIcon = (props: IconProps) => {
  const { primaryColor } = getColor(props);

  return (
    <SVG {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="
            M7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H9
            C11.1636 17 13.0062 15.6258 13.7026 13.7026
            M17 17H16.5
            M10 12C10 11.4021 10.1049 10.8288 10.2974 10.2974
            M21 21L13.7026 13.7026
            M3 3L10.2974 10.2974
            M10.2974 10.2974L13.7026 13.7026
            M13.0464 7.39604C13.6466 7.14106 14.3068 7 15 7H17
            C19.7614 7 22 9.23858 22 12C22 13.2151 21.5665 14.329 20.8458 15.1954
          "
          stroke={primaryColor}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </SVG>
  );
};